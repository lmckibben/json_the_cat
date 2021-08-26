const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response ,body) => {
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);
    let desc = null;
    let err = null;
    if (data.length === 0) {
      err = "Error: Not a cat species!";
      callback(err, desc);
    } else {
      desc = data[0].description;
      callback(err, desc);
    }
    
  });
};

module.exports = { fetchBreedDescription };