# Phishing Detection Tool

## Product Definition

### Problem Statement
Non-technical users cannot reliably determine whether a URL or email is phishing. Existing tools are either too technical, lack plain-English explanations, or do not combine multiple detection methods into a single, cohesive risk assessment. This leaves users vulnerable to increasingly sophisticated social engineering attacks.

### Solution Statement
This project is a web-based phishing analysis platform that evaluates URLs and email content using a multi-layered approach:
1.  **Heuristic Analysis**: Checking for known patterns (e.g., suspicious TLDs, IP addresses in URLs).
2.  **Reputation Intelligence**: Querying trusted databases like Google Safe Browsing and VirusTotal.
3.  **Statistical Classification (AI)**: Analyzing context and language patterns for intent.

The system provides not just a "safe/unsafe" verdict, but a **risk score** and a **Detailed Explanation** of *why* a particular input was flagged.

### Target Users
*   **Students & Non-Technical Users**: Need quick, easy-to-understand safety checks.
*   **Small Business Employees**: Need a first line of defense against targeted emails.
*   **IT Support Teams**: Need a tool to quickly triage user reports.

---

## Technical Overview
This project demonstrates rigorous security engineering practices, including:
*   **System Design**: Asynchronous architecture for performance and resilience.
*   **Threat Modeling**: Proactive identification and mitigation of security risks (STRIDE).
*   **Defensive Programming**: Rate limiting, input validation, and principle of least privilege.
*   **Full-Stack Implementation**: React frontend, NestJS backend, PostgreSQL database, and Redis caching.

## Project Structure
*   `/docs`: Detailed architectural documentation (Architecture, Threat Model, API Contract, etc.).
*   `/frontend`: React application code (Phase 2).
*   `/backend`: NestJS API and worker services (Phase 2).
*   `/scripts`: Utility and deployment scripts.

## Getting Started

### Prerequisites
*   Node.js (v18+)
*   Docker & Docker Compose (optional, for production build)
*   PostgreSQL (if running locally without Docker)

### Installation (Local Dev)
1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/phishguard.git
    cd phishguard
    ```

2.  **Setup Backend**:
    ```bash
    cd backend
    npm install
    # Set up .env (copy from .env.production template)
    npx prisma migrate dev
    npm run start:dev
    ```

3.  **Setup Frontend**:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

4.  **Access the App**:
    *   Frontend: `http://localhost:5173`
    *   Backend API: `http://localhost:3000`

### Installation (Docker Production)
```bash
docker-compose up --build
```
Access at `http://localhost`.

## Architecture & Security Features
*   **Authentication**: JWT-based stateless auth with bcrypt password hashing.
*   **Scoring Engine**: Weighted formula ($0.5 \times Rep + 0.3 \times Heu + 0.2 \times AI$).
*   **AI Analysis**: Simulation service analyzing semantic content for urgency and credential theft patterns.
*   **Rate Limiting**: ThrottlerModule configured for API protection.
*   **Containerization**: Optimized Dockerfiles for multi-stage builds.
