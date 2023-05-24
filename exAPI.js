const axios = require('axios');
axios.get('rxdb/plugins/storage-lokijs')
  .then(response => {
    // Handle the API response here
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors that occur during the API request
    console.error(error);
  });
 