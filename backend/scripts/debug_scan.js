const axios = require('axios');

async function debugScan() {
  try {
    const url = 'http://secure-paypal-verify.xyz';
    console.log(`Scanning: ${url}`);
    
    // Scan without auth for simplicity, assuming public endpoint or using a hardcoded valid token if needed.
    // Since we just ran the server, we might need to register/login first to get a token if the endpoint is protected (it shouldn't be for POST /scan based on earlier context, but let's check).
    // Actually, POST /scan allows anonymous but tracking user if token present.
    
    const response = await axios.post('http://localhost:3000/api/v1/scan', {
      url: url
    });

    console.log('Result:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

debugScan();
