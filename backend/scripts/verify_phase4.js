const axios = require('axios');

const API_URL = 'http://localhost:3000/api/v1';
const AUTH_URL = 'http://localhost:3000/auth';

async function verify() {
  try {
    const timestamp = Date.now();
    const email = `test_ai_${timestamp}@example.com`;
    const password = 'password123';

    console.log('1. Registering User...');
    await axios.post(`${AUTH_URL}/register`, { email, password });
    
    console.log('2. Logging In...');
    const loginRes = await axios.post(`${AUTH_URL}/login`, { email, password });
    const token = loginRes.data.access_token;
    
    console.log('3. Testing AI Trigger...');
    // "urgent password verify" should trigger AI heuristics in our simulation
    const aiRes = await axios.post(`${API_URL}/scan`, 
      { 
        url: 'http://example.com/login',
        content: 'Please verify your password immediately. It is urgent.'
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    
    console.log('✅ Scan Result:', aiRes.data.verdict);
    console.log(`   Total Score: ${aiRes.data.totalScore}`);
    console.log(`   AI Score: ${aiRes.data.aiScore}`);
    console.log(`   AI Explanation: ${aiRes.data.aiExplanation}`);

    if (aiRes.data.aiScore > 0) {
      console.log('✅ AI Component successfully contributed to the score.');
    } else {
      console.error('❌ AI Score was 0, expected positive value.');
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Verification Failed:', error.response ? error.response.data : error.message);
    process.exit(1);
  }
}

verify();
