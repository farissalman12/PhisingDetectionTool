# Non-Functional Requirements (NFRs)

## Performance
1.  **Latency**:
    *   New Scan (Heuristics only): < 500ms
    *   New Scan (Full with APIs): Depends on 3rd party API latency, targeting < 3000ms.
2.  **Throughput**: Support 10 concurrent scans per second on the MVP infrastructure.

## Reliability
1.  **Availability**: 99.0% uptime during business hours.
2.  **Degradation**: If external APIs (e.g., VirusTotal) are down, the system must still return a result based on Heuristics and AI, with a "Partial Result" warning.

## Security
1.  **Data Retention**: Specific scan details (URLs) are retained for 30 days for analytics, then anonymized.
2.  **Privacy**: User emails (if provided) are encrypted at rest.
3.  **Least Privilege**: The Application Server cannot drop tables in the Database; it only has INSERT/SELECT/UPDATE permissions (via scoped users).

## Maintainability
1.  **Logging**: All system events must be logged in structured JSON format.
2.  **Code Quality**: All code must pass ESLint (Frontend) and Prettier (Backend) checks before commit.
