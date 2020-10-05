const axios = require("axios");

module.exports = async () => {
  const results = await axios.get("https://dog.ceo/api/breeds/image/random");
  return results.data.message;
};
