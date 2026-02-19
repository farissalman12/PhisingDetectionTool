# Risk Scoring Logic

## The Formula

The Total Risk Score (0-100) is a weighted sum of three distinct analysis components.

$$
Score = (W_{rep} \times S_{rep}) + (W_{heu} \times S_{heu}) + (W_{ai} \times S_{ai})
$$

### Weights
*   **Reputation ($W_{rep}$)**: 0.5 (Highest confidence)
*   **Heuristics ($W_{heu}$)**: 0.3 (Medium confidence)
*   **AI Analysis ($W_{ai}$)**: 0.2 (Lowest confidence, prone to hallucination)

### Critical Override
If **any** Reputation Engine returns a "Malicious" verdict (e.g., Google Safe Browsing says "Phishing"), the Total Score is automatically set to **100**.

### Dynamic Boosts
To prevent false negatives when Reputation data is unavailable (e.g., new domains), the system applies dynamic boosts:
1.  **Heuristic Boost**: If `Reputation == 0` AND `Heuristics > 40`, the Total Score is raised to match the Heuristic Score.
2.  **AI Boost**: If `AI Score > 70` (indicating high urgency or credential harvesting), the Total Score is raised to match the AI Score, ensuring email-based threats are caught even without malicious URLs.

---

## Component Scoring

### 1. Reputation ($S_{rep}$)
*   Google Safe Browsing: Safe=0, Unsafe=100
*   VirusTotal: $Score = (\frac{positives}{total\_vendors}) \times 100$
*   Blocklist (Internal): Match=100

### 2. Heuristics ($S_{heu}$)
Start at 0, add points for each violation:
*   IP address in URL: +50
*   Target is an executable (.exe, .scr): +30
*   Suspicious TLD (.xyz, .top): +20
*   Punycode characters: +30
*   Keyword match ("verify", "secure-login"): +15
*   (Cap at 100)

### 3. AI Analysis ($S_{ai}$)
*   The LLM is prompted to return a risk score from 0-100 based on the text body.
*   Prompt: "Analyze this text for urgency, authority, and scarcity cues..."

## Verdict Thresholds
*   **0 - 10**: Safe
*   **11 - 50**: Suspicious (User should be cautious)
*   **51 - 100**: Phishing / Malicious (Access blocked/warned)
