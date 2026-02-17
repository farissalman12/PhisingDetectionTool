# Threat Model (STRIDE)

This document applies the STRIDE methodology to identify potential security threats and their mitigations.

| Threat Category | Description in Context | Risk Level | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| **S**poofing | Attacker impersonates a valid user to bypass rate limits or access admin panel. | High | - Enforce strong JWT authentication.<br>- Implement strict Role-Based Access Control (RBAC).<br>- Rate limit by IP for unauthenticated users. |
| **T**ampering | User modifies a scan result in the database to hide malicious activity. | Critical | - Database access is restricted to the Backend service only.<br>- Immutable logs (INSERT-only for scan history).<br>- Input validation on all API endpoints. |
| **R**epudiation | User claims they never submitted a malicious URL. | Medium | - Log all submissions with IP address and User ID (if auth).<br>- Maintain audit trails for 30 days. |
| **I**nformation Disclosure | Attacker accesses other users' scan history or sensitive data. | High | - UUIDs for all resources (prevent enumeration).<br>- Scoping database queries to `user_id`.<br>- Masking API keys in logs and errors. |
| **D**enial of Service | Attacker floods the API with millions of scan requests to crash the server. | High | - Redis-based rate limiting (ThrottlerGuard).<br>- Queue-based processing (backpressure).<br>- Max payload size limits. |
| **E**levation of Privilege | Regular user accesses Admin endpoints (e.g., adding to blacklist). | Critical | - Decorators `@Roles('admin')` on sensitive routes.<br>- Separate admin interface route. |

## Specific Attack Vectors

### 1. The "Recursive Scan" Attack
*   **Threat**: Attacker submits a URL that redirects to `localhost` or the API itself.
*   **Mitigation**: The system inspects DNS resolution *before* any request is made (if active scanning were enabled, but we are passive). Since we are passive, this is less relevant, but we must sanitize the input string to prevent stored XSS.

### 2. Use as a "Crypting" Service
*   **Threat**: Virus writers use the tool to check if their malware is detected, adjusting it until it passes.
*   **Mitigation**: 
    *   Limit distinct scans per user/IP per day.
    *   Do not reveal *exactly* which rule triggered the detection (fuzz the output slightly for high-risk users). (Optional/Advanced)
