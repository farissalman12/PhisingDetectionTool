# Data Flow Diagram

This document outlines the movement of data through the system, highlighting trust boundaries and asynchronous processing.

## High-Level Flow

```mermaid
graph TD
    User[User / Client] -->|Submit URL/Email| Frontend[React Frontend]
    Frontend -->|HTTPS Request| APIGateway[NestJS API Gateway]
    
    subgraph "Trust Boundary: External"
    User
    end

    subgraph "Trust Boundary: Internal Network"
        APIGateway -->|Validate & Enqueue| Redis[Redis Queue]
        
        Redis -->|Pop Task| Worker[Analysis Worker Service]
        
        Worker -->|Query| DB[(PostgreSQL)]
        Worker -->|Cache/Read| Cache[(Redis Cache)]
    end
    
    subgraph "Trust Boundary: External APIs"
        Worker -->|HTTP/REST| VT[VirusTotal API]
        Worker -->|HTTP/REST| GSB[Google Safe Browsing]
        Worker -->|HTTP/REST| OpenAI[OpenAI API]
    end

    Worker -->|Save Result| DB
    Worker -->|Update Status| Redis
    
    Frontend -->|Poll Status/Get Result| APIGateway
    APIGateway -->|Read Result| DB
```

## Detailed Data Path

1.  **Submission**:
    *   User inputs data into the Frontend.
    *   Frontend performs basic validation (format check).
    *   Data is sent to `POST /api/scan` at the API Gateway.

2.  **Ingestion & Queuing**:
    *   API Gateway validates authentication (if logged in) and rate limits.
    *   Gateway checks Redis Cache for a recent existing scan of the same URL (Hit? Return immediately).
    *   If no cache, Gateway pushes a `ScanJob` to the Redis Queue and returns a `job_id` to the user.

3.  **Processing (The Worker)**:
    *   Worker service pulls `ScanJob`.
    *   **Step 1: Local Heuristics**: Regex checks, allow/blocklist lookup in DB.
    *   **Step 2: External APIs**: Parallel calls to VirusTotal, Safebrowsing, etc.
    *   **Step 3: AI Analysis** (Conditional): If heuristics are inconclusive, call LLM.
    *   **Step 4: Scoring**: Aggregator function calculates final 0-100 score.

4.  **Completion**:
    *   Result is written to `scans` table in PostgreSQL.
    *   Result is cached in Redis (TTL: 24 hours).
    *   Job status updated to `COMPLETED`.

5.  **Retrieval**:
    *   Frontend polls `GET /api/scan/{job_id}`.
    *   Gateway returns the JSON result.
