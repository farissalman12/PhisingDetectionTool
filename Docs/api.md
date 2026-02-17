# API Contract (v1)

Base URL: `/api/v1`

## Authentication
Headers:
`Authorization: Bearer <token>`

---

## 1. Auth
### `POST /auth/register`
*   **Body**: `{ "email": "user@example.com", "password": "securePassword123" }`
*   **Response**: `201 Created`

### `POST /auth/login`
*   **Body**: `{ "email": "...", "password": "..." }`
*   **Response**: `{ "access_token": "eyJhbG..." }`

---

## 2. Scans
### `POST /scan` (Submit a new URL)
*   **Auth**: Optional (Rate limit tighter for anon)
*   **Body**:
    ```json
    {
      "url": "http://sus-link.com/login",
      "source": "email_body" // optional context
    }
    ```
*   **Response**: `202 Accepted`
    ```json
    {
      "scan_id": "550e8400-e29b-41d4-a716-446655440000",
      "status": "pending",
      "queue_position": 1
    }
    ```

### `GET /scan/{id}` (Poll for results)
*   **Response**: `200 OK`
    ```json
    {
      "id": "...",
      "status": "completed",
      "score": 85,
      "verdict": "high_risk",
      "details": {
        "heuristics": ["contains_ip_address", "suspicious_tld"],
        "virus_total": { "positives": 5, "total": 90 },
        "ai_analysis": "The text creates false urgency..."
      },
      "created_at": "2023-10-27T10:00:00Z"
    }
    ```

---

## 3. History
### `GET /scan/history`
*   **Auth**: Required
*   **Query**: `?limit=10&offset=0`
*   **Response**: `200 OK` (Array of scan summaries)
