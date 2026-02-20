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
### `POST /api/v1/scan` (Submit a new URL)
*   **Auth**: Optional (Rate limit tighter for anon)
*   **Body**:
    ```json
    {
      "url": "http://sus-link.com/login",
      "content": "Subject: Urgent...\n\nPlease verify..." // Optional email content
    }
    ```
*   **Response**: `201 Created`
    ```json
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "risk_score": 85,
      "verdict": "phishing",
      "totalScore": 85,
      "heuristicScore": 60,
      "aiScore": 90,
      "rules": [],
      "virusTotal": {},
      "aiExplanation": "..." 
    }
    ```
    *(Note: Scanning is currently synchronous for immediate feedback)*

### `GET /api/v1/scan/{id}` (Retrieve scan results)
*   **Response**: `200 OK`
    ```json
    {
      "id": "...",
      "status": "completed",
      "risk_score": 85,
      "verdict": "phishing",
      "rules": [],
      "virusTotal": { "malicious": 5, "total": 90 },
      "aiExplanation": "The text creates false urgency...",
      "created_at": "2023-10-27T10:00:00Z"
    }
    ```

---

## 3. History
### `GET /api/v1/scan` (Get scan history)
*   **Auth**: Required
*   **Query**: `?limit=10&offset=0`
*   **Response**: `200 OK` (Array of scan summaries)
