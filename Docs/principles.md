# Security Principles

These axioms guide every design and implementation decision in the project.

## 1. Zero Trust Input
*   **Principle**: "All input is malicious until proven otherwise."
*   **Implementation**: 
    *   Strict schema validation (Zod/Class-Validator) on every API endpoint.
    *   Input sanitization before storage or rendering.

## 2. Fail Closed
*   **Principle**: "If a security control fails, access is denied."
*   **Implementation**: 
    *   If the Rate Limit service is down, block all requests (rather than allow infinite requests).
    *   If the Auth service is unreachable, reject login attempts.

## 3. Defense in Depth
*   **Principle**: "Do not rely on a single layer of security."
*   **Implementation**: 
    *   We use Frontend Validation (UX) + Backend Validation (Security) + Database Constraints (Integrity).
    *   We use Heuristics + Reputation + AI (Triangulation).

## 4. Principle of Least Privilege
*   **Principle**: "Components only get the permissions they need."
*   **Implementation**:
    *   The `ScanWorker` does not need write access to the `Users` table.
    *   API Keys for external services are injected via environment variables, not hardcoded.
