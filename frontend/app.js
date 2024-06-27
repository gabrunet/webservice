const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('http://localhost:3000/getProduto/1');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();