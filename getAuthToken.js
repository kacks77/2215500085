// getAuthToken.js
const axios = require('axios');

const credentials = {
  email: "kartik.chahar_cs.aiml22@gla.ac.in",
  name: "Kartik Chahar",
  rollNo: "2215500085",
  accessCode: "CNneGT",
  clientID: "82b40f6c-6058-42ca-8232-3ebffe7f473e",
  clientSecret: "XzAjxuNmfpXhQgGM"
};

axios.post("http://20.244.56.144/evaluation-service/auth", credentials)
  .then(response => {
    console.log("✅ Authorization Token Received:");
    console.log(response.data); // This will include your access token!
  })
  .catch(error => {
    console.error("❌ Failed to get token:", error.response?.data || error.message);
  });