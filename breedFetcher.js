const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response ,body) => {
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);
    if (data.length === 0) {
      console.log("Error: Not a cat!");
    } else {
      console.log(data[0].description);
    }
    
  });
};

module.exports = { fetchBreedDescription };