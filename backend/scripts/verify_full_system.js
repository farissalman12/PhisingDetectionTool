const axios = require('axios');

const API_URL = 'http://localhost:3000/api/v1';
const AUTH_URL = 'http://localhost:3000/auth';

async function verify() {
  console.log('🚀 Starting Final End-to-End Verification...');
  try {
    const timestamp = Date.now();
    const email = `final_test_${timestamp}@example.com`;
    const password = 'SecurePassword123!';

    // 1. Authentication Flow
    console.log('\n🔐 1. Testing Authentication...');
    await axios.post(`${AUTH_URL}/register`, { email, password });
    console.log('   ✅ User Registration Successful');
    
    const loginRes = await axios.post(`${AUTH_URL}/login`, { email, password });
    const token = loginRes.data.access_token;
    console.log('   ✅ Login Successful (Token received)');
    
    const authHeaders = { headers: { Authorization: `Bearer ${token}` } };

    // 2. Safe URL Scan
    console.log('\n🟢 2. Testing Safe URL Scan...');
    const safeRes = await axios.post(`${API_URL}/scan`, 
      { url: 'https://google.com' }, 
      authHeaders
    );
    if (safeRes.data.verdict === 'safe' && safeRes.data.totalScore < 10) {
      console.log(`   ✅ Safe URL Verified (Score: ${safeRes.data.totalScore})`);
    } else {
      throw new Error(`Safe URL failed: ${JSON.stringify(safeRes.data)}`);
    }

    // 3. Phishing URL Scan
    console.log('\n🔴 3. Testing Phishing URL Scan...');
    // Using a URL that triggers keywords (login, verify) + AI keywords
    const phishingRes = await axios.post(`${API_URL}/scan`, 
      { 
        url: 'http://secure-login-verify-account.com',
        content: 'URGENT: Verify your password immediately to prevent account suspension.'
      }, 
      authHeaders
    );
    
    if (phishingRes.data.verdict === 'phishing' || phishingRes.data.verdict === 'suspicious') {
      console.log(`   ✅ Phishing/Suspicious URL Verified (Score: ${phishingRes.data.totalScore})`);
      console.log(`      - AI Score: ${phishingRes.data.aiScore}`);
      console.log(`      - Heuristic Score: ${phishingRes.data.heuristicScore}`);
    } else {
      throw new Error(`Phishing URL failed: ${JSON.stringify(phishingRes.data)}`);
    }

    // 4. History/Pagination
    console.log('\n📜 4. Testing Scan History...');
    const historyRes = await axios.get(`${API_URL}/scan?take=5&skip=0`, authHeaders);
    if (Array.isArray(historyRes.data) && historyRes.data.length >= 2) {
      console.log(`   ✅ History Retrieved (${historyRes.data.length} records found)`);
    } else {
      throw new Error('History check failed');
    }

    console.log('\n✨ All Systems Operational! ✨');

  } catch (error) {
    console.error('\n❌ Verification Failed:', error.response ? error.response.data : error.message);
    process.exit(1);
  }
}

verify();
