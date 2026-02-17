# Failure Modes & Resilience

Analysis of how the system behaves when dependencies fail.

## External API Failures

### Scenario: VirusTotal API Timeout
*   **Impact**: Cannot get malware reputation.
*   **Behavior**: 
    *   Worker catches timeout error.
    *   Logs the failure.
    *   Calculates `Total Score` using only Heuristics and AI weights (re-normalizing the score).
    *   Adds `warning: "VirusTotal unavailable"` to the response.

### Scenario: OpenAI API Overloaded (503)
*   **Impact**: No explanation text generated.
*   **Behavior**:
    *   Worker skips AI step.
    *   Returns risk score based on other factors.
    *   `explanation` field uses a generic template based on triggered heuristics (e.g., "Flagged due to IP address usage").

## Internal Infrastructure Failures

### Scenario: Redis Queue Down
*   **Impact**: Cannot accept new asynchronous jobs.
*   **Behavior**:
    *   API Gateway returns `503 Service Unavailable` with "Please try again later".
    *   (Alternative fallback): If load is low, process synchronously (Phase 2 feature).

### Scenario: Database Connection Lost
*   **Impact**: Cannot save results or authenticate.
*   **Behavior**:
    *   API returns `500 Internal Server Error`.
    *   Health check endpoint starts returning `Unhealthy` to load balancer.
