const axios = require("axios");

module.exports = async () => {
  const results = await axios.get("https://dog.ceo/api/breeds/image/random");
  console.log(results);
  const image = results.data.message;
  var real = "this is igo";
  return { dog: image };
};
