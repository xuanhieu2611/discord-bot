const api_url ="https://zenquotes.io/api/random/";

const quote = async () => {
  const response = await fetch(api_url);
  var data = await response.json();
  return data[0].q;
}


module.exports = quote;