const request = require('request');

request.get({
    url: 'https://api.api-ninjas.com/v1/animals',
    headers: {
        'X-Api-Key': 'oHOPH3Y1uOER9GElFt5TCg==zfl3eFDmYSj4iZGF'
    },
}, function (error, response, body) {
    if (error) return console.error('Request failed:', error);
    else if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
    else console.log(body)
});
