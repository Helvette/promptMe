/**
* OAuth consumer key:
* Y7i0Sf2WGphZl5UIRFNyQERsrGifS23D7AvxW4X2cTRyCO0nQJ
* OAuth consumer secret:
* Z9GLFA7M8bMDuxo2YbmMpSk1CciXNegVbWDXyCyZCY1xrXu7zm
* MÉTODOS: https://www.tumblr.com/docs/en/api/v2#tagged-method
*/

const tumblrAPI = 'Y7i0Sf2WGphZl5UIRFNyQERsrGifS23D7AvxW4X2cTRyCO0nQJ';

const getPromptGenre = str => {
  const promise = fetch(`https://api.tumblr.com/v2/tagged?tag=${str}-prompt&api_key=${tumblrAPI}`);
  promise
    .then(data => data.json())
    .then(data => console.log(data));
};

const randomNumber = () => {
  return Math.floor((Math.random() * 20));
};