var express = require('express');

var port = 3000;
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port, function() {
	console.log('Server listening on port ' + port)
});