
console.log('Jimmy has (probably) started the script.');
var Twit = require('twit'); //this like an import statement for the twit package

var T = new Twit({
    consumer_key: 'pikOyAPKX4AO6WDHcyrP7zBJo',
    consumer_secret: 'k5mgTqb7DVbjEEpVkjY2k5SbBHLCz0wMB7NQjfTEPS8ZreetlW',
    access_token: '1183155053558935552-Uip7dUjn1xMVG7hB397kUpEDBCl7tN',
    access_token_secret: 'uKoBCw6iKtHeZoeK48NuOaC1tJQQAHcR8JnROvRhz2YC1'
}); //import API keys. could also be its own file and imported like the twit package



var params = {
    q: '#yinzer',
    count: 100,
    lang: 'en',
    tweet_mode: 'extended'
};

const express = require('express');
const app = express();
 
app.get('', function (req, res) {
    console.log('Query Parameters: ', req.query);
    Object.assign(params, req.query);
    console.log('Twit Parameters: ', params);
    T.get('search/tweets', params, (err, data, response) => {
        var tweets = data.statuses;
        res.json(tweets.map((tweet) => tweet.full_text));
    });
})

app.listen(3000);