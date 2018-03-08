require('./styles.scss');

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http://ergast.com/api/f1.json')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });