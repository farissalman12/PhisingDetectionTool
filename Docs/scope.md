# System Scope & Boundaries

## Defined Scope
The Phishing Detection Tool is designed to analyze user-submitted content within strict functional and security boundaries.

### In-Scope Capabilities
1.  **Passive Analysis**: The system analyzes the *string representation* of URLs and email content.
2.  **Metadata Inspection**: The system inspects DNS records, WHOIS data (cached), and SSL certificate validity.
3.  **External Intelligence**: The system queries third-party reputation APIs (Google Safe Browsing, VirusTotal, PhishTank).
4.  **Static Heuristics**: The system applies rule-based logic to detect common phishing patterns (e.g., punycode, excessive length, suspicious keywords).
5.  **Contextual Analysis**: The AI component analyzes text for semantic indicators associated with social engineering (urgency, authority, scarcity).

---

## Out-of-Scope (Explicit Exclusions)
To minimize attack surface and legal liability, the system explicitly **excludes** the following:

### 1. No Active Crawling or Rendering
*   The system will **NOT** visit the target URL.
*   The system will **NOT** render the page content (e.g., via Headless Chrome).
*   The system will **NOT** download files or follow redirects beyond header inspection.
*   *Reasoning*: Visiting potentially malicious sites exposes the analysis infrastructure to exploits, drive-by downloads, and IP flagging.

### 2. No JavaScript Execution
*   The system will **NOT** execute any JavaScript code found in email bodies or URL targets.
*   *Reasoning*: Sandboxing untrusted code is complex and resource-intensive; execution increases the risk of local compromise.

### 3. No Proxying
*   The system will **NOT** act as a proxy for the user to view the site safely.
*   *Reasoning*: This would require complex session handling and could facilitate abuse (e.g., bypassing geo-blocks).

### 4. No Automated Takedowns
*   The system will **NOT** automatically report sites to hosting providers or registrars.
*   *Reasoning*: Automated reporting risks liability for false positives.

## Trust Boundaries
*   **User Input**: Untrusted. Treat as hostile.
*   **External APIs**: Semi-trusted. Failure modes must be handled gracefully.
*   **Database**: Trusted internal storage.
