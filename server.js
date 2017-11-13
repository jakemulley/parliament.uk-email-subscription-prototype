const
	express = require('express'),
	app     = express(),
	port    = process.env.PORT || 5000,
	path    = require('path');

app.set('view engine', 'pug');
app.set('views', './src/templates');
app.use(express.static('_public'));
app.get('/', function(req, res) {
	res.render('index');
});
app.get('/confirmation', function(req, res) {
	res.render('confirmation', { email: req.query.email });
});

app.listen(port, function() {
	console.log('Server started on port: ' + port);
});
