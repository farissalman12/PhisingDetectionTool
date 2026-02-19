const axios = require('axios');

const SCENARIOS = [
  {
    name: "Safe Domain",
    url: "https://www.google.com",
    expectedVerdict: "safe",
    minScore: 0,
    maxScore: 10
  },
  {
    name: "Suspicious Keywords (Low-Med Risk)",
    // "secure", "login" -> 30 points. 
    // Formula: 0.3 * 30 + 0.2 * 5 = 10. 
    // This might actually be borderline "Safe" (10) vs "Suspicious" (11).
    // Let's try adding one more keyword to ensure it hits suspicious.
    // "secure", "login", "account" -> 45 points.
    // Fixed Logic: Heuristic > 40, so Score = 45 -> Phishing?
    // Wait, if Heuristic > 40, it jumps to Max(Total, Heuristic).
    // So 45 becomes 45 (Suspicious).
    // Let's target exactly "Suspicious" range (11-50).
    // "login-update.com" -> 30 points.
    // Total = 0.3 * 30 + 1 = 10. Still Safe.
    // My formula might be too lenient for 2 keywords.
    url: "http://secure-banking-update.com", 
    // Keywords: secure, banking, update -> 45 points.
    // Heuristic 45 > 40 -> Score 45. Verdict: Suspicious (11-50).
    expectedVerdict: "suspicious",
    minScore: 11,
    maxScore: 50
  },
  {
    name: "High Reputation Phishing (The Fix)",
    url: "http://secure-paypal-verify.xyz",
    // Keywords: secure, paypal, verify (45) + TLD .xyz (20) = 65.
    // Heuristic > 40 -> Score 65. Verdict: Phishing (>50).
    expectedVerdict: "phishing",
    minScore: 51,
    maxScore: 100
  },
  {
    name: "IP Address URL",
    url: "http://192.168.1.55/login",
    // IP Rule (50) + Keyword "login" (15) = 65.
    // Heuristic > 40 -> Score 65. Verdict: Phishing.
    expectedVerdict: "phishing",
    minScore: 51,
    maxScore: 100
  },
  {
    name: "Localhost Assessment",
    url: "http://localhost:3000",
    expectedVerdict: "safe",
    minScore: 0,
    maxScore: 10
  }
];

async function runTests() {
  console.log("Starting Scenario Verification...\n");
  let passed = 0;
  let failed = 0;

  for (const scenario of SCENARIOS) {
    try {
      // console.log(`Testing: ${scenario.name} (${scenario.url})`);
      const response = await axios.post('http://localhost:3000/api/v1/scan', {
        url: scenario.url
      });

      const result = response.data;
      const score = result.risk_score || result.totalScore;
      const verdict = result.verdict.toLowerCase();

      const scoreOk = score >= scenario.minScore && score <= scenario.maxScore;
      const verdictOk = verdict === scenario.expectedVerdict;

      if (scoreOk && verdictOk) {
        console.log(`✅ [PASS] ${scenario.name}`);
        passed++;
      } else {
        console.log(`❌ [FAIL] ${scenario.name}`);
        console.log(`   Expected: ${scenario.expectedVerdict} (Score ${scenario.minScore}-${scenario.maxScore})`);
        console.log(`   Got:      ${verdict} (Score ${score})`);
        failed++;
      }
    } catch (error) {
      console.log(`❌ [ERROR] ${scenario.name}: ${error.message}`);
      if (error.response) console.log(JSON.stringify(error.response.data));
      failed++;
    }
  }

  console.log(`\nSummary: ${passed} Passed, ${failed} Failed`);
}

runTests();
