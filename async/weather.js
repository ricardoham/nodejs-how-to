const request = require('request');
const url = 'https://localhost';

module.exports = function (callback) {
  request({
    url: url,
    json: true
  }, function (error, response, body) {
    if (error) {
      callback('Unable to fetch weather');
    } else {
      callback(JSON.stringify(body, null, 4))
    }
  });
}