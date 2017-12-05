const
	express = require('express'),
	app     = express(),
	port    = process.env.PORT || 5000,
	path    = require('path')
	jsonFile= require(__dirname + '/src/json/topics.json');

function properJson() {
	var newJson = {
		'ee': [],
		'debates': [],
		'accountability': [],
		'research': [],
		'news': [],
		'bills': [],
		'committees': []
	};
	for (var i = jsonFile.length - 1; i >= 0; i--) {
		var done = false;
		if(jsonFile[i].Visibility == 'Unlisted' || jsonFile[i].Visibility == 'Restricted') {
			done = true;
		}
		if(jsonFile[i].Name.includes('Committee news') && done == false) {
			newJson.news.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Speaker news') && done == false) {
			newJson.news.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Twitter') && done == false) {
			newJson.news.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Parliamentary Digital Service') && done == false) {
			newJson.news.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Latest news from Parliament') && done == false) {
			newJson.news.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Code.includes('Bill') && done == false) {
			newJson.bills.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Committee') && done == false) {
			newJson.committees.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Recess dates') && done == false) {
			newJson.debates.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Westminster Hall Debates') && done == false) {
			newJson.debates.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Prime Minister\'s Questions') && done == false) {
			newJson.debates.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Adjournments Debates') && done == false) {
			newJson.debates.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Question Book') && done == false) {
			newJson.debates.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Votes and Proceedings') && done == false) {
			newJson.debates.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Today\'s Written Statements') && done == false) {
			newJson.debates.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Minutes of Proceedings') && done == false) {
			newJson.debates.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Register of All-Party Groups') && done == false) {
			newJson.debates.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('House of Commons Hansard') && done == false) {
			newJson.debates.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Summary Agendas') && done == false) {
			newJson.debates.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('expenses claims') && done == false) {
			newJson.accountability.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Standards Allegations') && done == false) {
			newJson.accountability.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Members\' Interests') && done == false) {
			newJson.accountability.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Lords\' Interests') && done == false) {
			newJson.accountability.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Briefing Papers') && done == false) {
			newJson.research.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Debate Packs') && done == false) {
			newJson.research.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('POST') && done == false) {
			newJson.research.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Lords In Focus') && done == false) {
			newJson.research.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Lords In Focus') && done == false) {
			newJson.research.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Works of Art')) {
			newJson.committees.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('The Leader\'s Group on Governance')) {
			newJson.committees.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Public Accounts Commission')) {
			newJson.committees.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Read yesterday’s House of Lords debates')) {
			newJson.debates.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Public Bills before Parliament')) {
			newJson.bills.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Private Bills before Parliament')) {
			newJson.bills.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Parliament’s YouTube channel')) {
			newJson.news.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Parliament on Flickr')) {
			newJson.news.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('parks')) {
			done = true;
		}
		if(jsonFile[i].Name.includes('Parliament Week Partner Updates')) {
			done = true;
		}
		if(jsonFile[i].Name.includes('Lords Library notes')) {
			newJson.research.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Lord Speaker\'s committee on the size of the House')) {
			newJson.committees.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('LiberTeas update')) {
			done = true;
		}
		if(jsonFile[i].Name.includes('Latest committee inquiries')) {
			newJson.committees.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('House of Lords Commission')) {
			newJson.committees.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('House of Commons Commission')) {
			newJson.committees.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('High Speed Rail (London – West Midlands) Bill (Lords)')) {
			newJson.bills.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Early Day Motions')) {
			newJson.debates.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Latest news from the House of Lords')) {
			newJson.news.push(jsonFile[i]);
			done = true;
		}
		if(jsonFile[i].Name.includes('Latest news from the House of Commons')) {
			newJson.news.push(jsonFile[i]);
			done = true;
		}
		if(done == false) {
			newJson.ee.push(jsonFile[i]);
		}
	}
	return newJson;
}

app.set('view engine', 'pug');
app.set('views', './src/templates');
app.use(express.static('_public'));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/confirmation', function(req, res) {
	res.render('confirmation', { email: req.query.email });
});

app.get('/context', function(req, res) {
	res.render('context');
});

app.get('/subscriptions', function(req, res) {
	res.render('subscriptions');
});

app.get('/all-subscriptions', function(req, res) {
	res.render('all-subscriptions', { data: properJson() });
});

app.listen(port, function() {
	console.log('Server started on port: ' + port);
});
