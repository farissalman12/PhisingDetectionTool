# User Personas

Modeling the different actors who interact with the system is crucial for both UX design and security threat modeling.

## 1. The Concerned User (Primary)
*   **Profile**: Student, parent, or office worker with low to medium technical literacy.
*   **Goals**:
    *   Verify if a link they received is safe to click.
    *   Understand *why* a link is suspicious (educational value).
    *   Get a result quickly (< 3 seconds).
*   **Pain Points**:
    *   Confused by technical jargon ("DNS record," "SSL mismatch").
    *   Anxious about false negatives (safety).
*   **System Interaction**: Submits URLs/emails, views simple dashboard.

## 2. The Administrator (Internal)
*   **Profile**: System owner or security analyst.
*   **Goals**:
    *   Monitor system health and performance.
    *   Update blacklists manually when new threats emerge.
    *   Review usage analytics to detect abuse.
*   **Pain Points**:
    *   Overwhelmed by spam submissions.
    *   Need to quickly block a domain that the automated system missed.
*   **System Interaction**: Accesses Admin Panel, manages configurations.

## 3. The Adversary (Threat Actor)
*   **Profile**: Malicious actor or botnet.
*   **Goals**:
    *   **Evasion**: Test their phishing links against the system to see if they are detected (using the tool as a "crypting" service).
    *   **Denial of Service (DoS)**: Flood the API to exhaust rate limits or crash the service.
    *   **Poisoning**: Submit safe URLs as "phishing" (if crowd-sourcing were enabled) or vice-versa.
    *   **Exploitation**: Attempt SQL injection or XSS via the input fields.
*   **System Interaction**: Automated API calls, fuzzing inputs, rapid-fire submissions.
