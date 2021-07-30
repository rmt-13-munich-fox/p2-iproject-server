var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://instagram47.p.rapidapi.com/public_user_posts',
  params: {userid: '1718924098'},
  headers: {'x-rapidapi-host': 'instagram47.p.rapidapi.com'}
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});