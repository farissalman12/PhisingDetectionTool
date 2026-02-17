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
*(Installation instructions will be added in Phase 2)*
