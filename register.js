const axios = require('axios');

const data = {
    email : "kartik.chahar_cs.aiml22@gla.ac.in",
    name: "Kartik Chahar",
    mobileNo: "7302455258",
    githubUserName: "kacks77",
    rollNo: "2215500085",
    collegeName: "GLA University",
    accessCode: "CNneGT"
}

axios.post("http://20.244.56.144/evaluation-service/register", data)
  .then(response => {
    console.log("✅ Registration Successful!");
    console.log(response.data); // Save this securely!
  })
  .catch(error => {
    console.error("❌ Registration Failed:", error.response?.data || error.message);
  });