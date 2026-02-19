const axios = require('axios');

const SCENARIOS = [
  {
    name: "Email with Phishing Link",
    // Simulating frontend extraction: URL + Content
    payload: {
      url: "http://secure-login-update.com",
      content: "Subject: Urgent Update Required\n\nDear User,\n\nPlease verify your account immediately or it will be suspended.\nClick here: http://secure-login-update.com"
    },
    // URL has keywords "secure", "login", "update" -> ~45 pts.
    // Content has "Urgent", "immediately", "verify" -> AI Score high.
    // Expected: Phishing (>50)
    expectedVerdict: "phishing"
  },
  {
    name: "Email with No Link (Text Only)",
    // Simulating frontend placeholder logic
    payload: {
      url: "http://email-analysis.local",
      content: "Subject: Password Reset\n\nSend us your password immediately to verify your identity."
    },
    // URL is placeholder (Safe/Neutral).
    // Content has "password", "verify", "immediately" -> AI Score ~90.
    // Logic: AI Boost should kick in because AI > 70.
    // Expected: Phishing (>50) via AI Boost.
    expectedVerdict: "phishing"
  },
  {
    name: "Safe Email",
    payload: {
      url: "http://email-analysis.local",
      content: "Subject: Meeting Notes\n\nHi team, here are the notes from today's sync. See you tomorrow."
    },
    // No triggers. AI Score low.
    // Expected: Safe (<11).
    expectedVerdict: "safe"
  }
];

async function runTests() {
  console.log("Starting Email Analysis Verification...\n");
  let passed = 0;
  let failed = 0;

  for (const scenario of SCENARIOS) {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/scan', scenario.payload);

      const result = response.data;
      const score = result.risk_score || result.totalScore;
      const verdict = result.verdict.toLowerCase();

      // Flexible check for verdict to allow "suspicious" if close to boundary
      const isPass = verdict === scenario.expectedVerdict;

      if (isPass) {
        console.log(`✅ [PASS] ${scenario.name}`);
        passed++;
      } else {
        console.log(`❌ [FAIL] ${scenario.name}`);
        console.log(`   Expected: ${scenario.expectedVerdict}`);
        console.log(`   Got:      ${verdict} (Score ${score})`);
        console.log(`   AI Score: ${result.aiScore}`);
        failed++;
      }
    } catch (error) {
      console.log(`❌ [ERROR] ${scenario.name}: ${error.message}`);
      failed++;
    }
  }

  console.log(`\nSummary: ${passed} Passed, ${failed} Failed`);
}

runTests();
