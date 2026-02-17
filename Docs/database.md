# Database Schema

## ER Diagram (Mermaid)

```mermaid
erDiagram
    USERS ||--o{ SCANS : initiates
    USERS ||--o{ BLACKLIST_ENTRIES : manages
    
    USERS {
        uuid id PK
        string email
        string password_hash
        enum role "user, admin"
        timestamp created_at
    }

    SCANS {
        uuid id PK
        uuid user_id FK "nullable (for anon)"
        text input_content
        int risk_score "0-100"
        enum verdict "safe, suspicious, phishing"
        jsonb detailed_report
        timestamp created_at
    }

    BLACKLIST_ENTRIES {
        uuid id PK
        string pattern "domain or regex"
        uuid added_by FK
        timestamp created_at
        text reason
    }
```

## Table Design Decisions

### 1. `users`
*   Standard user management.
*   `role` column separates regular users from admins (RBAC).

### 2. `scans`
*   The central ledger of the application.
*   `input_content`: Stores the URL or email snippet.
*   `detailed_report` (JSONB): Storing the full breakdown (VT results, AI explanation) as JSON allows flexibility. We don't need to query *inside* the report often, just retrieve it.
*   `user_id`: Nullable to allow anonymous scans (if we choose to support that), or for public-facing demo mode.

### 3. `blacklist_entries`
*   Allows manual override of the automated system.
*   If a domain is in this table, score is automatically 100.
