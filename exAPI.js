const axios = require('axios');
axios.get('https://developer.spotify.com/documentation/web-api')
  .then(response => {
    // Handle the API response here
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors that occur during the API request
    console.error(error);
  });
 