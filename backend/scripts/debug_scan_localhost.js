const axios = require('axios');

async function debugScan() {
  try {
    const url = 'http://localhost:4173/';
    console.log(`Scanning: ${url}`);
    
    // Scan without auth (or logic handles it)
    const response = await axios.post('http://localhost:3000/api/v1/scan', {
      url: url
    });

    console.log('Result:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    if (error.response) {
       console.error('Status:', error.response.status);
       console.error('Data:', JSON.stringify(error.response.data, null, 2));
    } else {
       console.error('Error:', error.message);
    }
  }
}

debugScan();
