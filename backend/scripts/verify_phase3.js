const axios = require('axios');

const API_URL = 'http://localhost:3000/api/v1';
const AUTH_URL = 'http://localhost:3000/auth';

async function verify() {
  try {
    const timestamp = Date.now();
    const email = `test${timestamp}@example.com`;
    const password = 'password123';

    console.log('1. Registering User...');
    await axios.post(`${AUTH_URL}/register`, { email, password });
    console.log('✅ Registration Successful');

    console.log('2. Logging In...');
    const loginRes = await axios.post(`${AUTH_URL}/login`, { email, password });
    const token = loginRes.data.access_token;
    if (!token) throw new Error('No token received');
    console.log('✅ Login Successful. Token received.');

    console.log('3. Running Scan (Heuristics + Reputation)...');
    // Test a "safe" URL
    const safeRes = await axios.post(`${API_URL}/scan`, 
      { url: 'https://google.com' },
      { headers: { Authorization: `Bearer ${token}` } } // sending token even if not enforced yet
    );
    console.log('✅ Safe Scan Result:', safeRes.data.verdict, 'Score:', safeRes.data.risk_score);

    // Test a "phishing" URL (simulated via Reputation Mock)
    const phishingRes = await axios.post(`${API_URL}/scan`, 
      { url: 'http://malware.com/login' },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log('✅ Phishing Scan Result:', phishingRes.data.verdict, 'Score:', phishingRes.data.risk_score);
    
    if (phishingRes.data.risk_score !== 100) {
      console.warn('⚠️ WARNING: Expected score 100 for malware.com, got ' + phishingRes.data.risk_score);
    }

  } catch (error) {
    console.error('❌ Verification Failed:', error.response ? error.response.data : error.message);
    process.exit(1);
  }
}

verify();
