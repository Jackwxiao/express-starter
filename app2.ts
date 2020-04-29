import express from 'express'
const app = express();

app.get('/', function (request, response) {
    response.send('Hello Express!');
});

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});
