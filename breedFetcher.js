const request = require('request');
const args = process.argv.slice(2);
const cat = args[0];

const fetchCat = () => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${cat}`, (error, response ,body) => {
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

fetchCat();