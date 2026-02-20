# Failure Modes & Resilience

Analysis of how the system behaves when dependencies fail.

## External API Failures

### Scenario: VirusTotal API Timeout
*   **Impact**: Cannot get malware reputation.
*   **Behavior**: 
    *   Backend catches timeout error gracefully.
    *   Logs the failure internally.
    *   Calculates `Total Score` using only Heuristics and AI weights (re-normalizing the score).
    *   Returns the available results without fully failing the request.

### Scenario: OpenAI API Overloaded (503)
*   **Impact**: No explanation text generated.
*   **Behavior**:
    *   Backend skips AI step.
    *   Returns risk score based on heuristics and reputation.
    *   `explanation` field remains null or uses a generic fallback.

## Internal Infrastructure Failures

### Scenario: Database Connection Lost
*   **Impact**: Cannot save results, authenticate, or lookup historical data.
*   **Behavior**:
    *   API returns `500 Internal Server Error`.
    *   Health check endpoint starts returning `Unhealthy` to load balancer (Render).
