var express = require('express');
var app = express();

// create a route
app.get('/', function (req, res) {
    res.send('Justin Tarantino is a programmer');
});

app.get('/Justin', function (req, res) {
    res.send(' Wassup Justin Tarantino The programmer');
});
app.get('/products/:id', function (req, res) {
    console.log(req.params.id);
    res.send("you sent me : " + req.params.id);
});
//start the server
var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});