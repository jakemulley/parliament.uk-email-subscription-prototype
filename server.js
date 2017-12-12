const
	express = require('express'),
	app     = express(),
	port    = process.env.PORT || 5000,
	path    = require('path')
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser');
	jsonFile= require(__dirname + '/src/json/topics.json');

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function getTopicsSubbedTo(subbedTo) {
	if(typeof subbedTo == 'undefined') {
		subbedTo = 'UKParliament_Bill_2056';
	}

	var newJson = [];
	var subbedToArray = subbedTo.split(',');

	for (var i = jsonFile.length - 1; i >= 0; i--) {
		for (var k = subbedToArray.length - 1; k >= 0; k--) {
			if(jsonFile[i].Code === subbedToArray[k]) {
				newJson.push(jsonFile[i]);
			}
		}
	}

	return sortByKey(newJson, 'Name');
}

function properJson(subbedTo) {
	if(typeof subbedTo == 'undefined') {
		subbedTo = 'UKParliament_Bill_2056';
	}

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

	for(key in newJson) {
		newJson[key] = sortByKey(newJson[key], 'Name');
	}

	return newJson;
}

app.set('view engine', 'pug');
app.set('views', './src/templates');
app.use(express.static('_public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/confirmation', function(req, res) {
	res.cookie('email', req.query.email);
	res.render('confirmation', { cookies: { email: req.query.email } });
});

app.get('/context', function(req, res) {
	res.render('context');
});

app.get('/subscriptions', function(req, res) {
	var subbedTo = req.cookies.subbed_topics;
	if(typeof subbedTo == 'undefined') {
		res.cookie('subbed_topics', 'UKParliament_Bill_2056');
	}
	if(req.query.resub) {
		res.cookie('subbed_topics', req.query.resub);
		res.redirect('/subscriptions');
	}
	res.cookie('seen_confirmation', true);
	res.render('subscriptions', { cookies: req.cookies, topics: getTopicsSubbedTo(subbedTo) } );
});

app.get('/all-subscriptions', function(req, res) {
	var subbedTo = req.cookies.subbed_topics;
	if(typeof subbedTo == 'undefined') {
		res.cookie('subbed_topics', 'UKParliament_Bill_2056');
	}
	var subbedToArray = subbedTo.split(',');
	res.render('all-subscriptions', { data: properJson(subbedTo), subbedTo: subbedToArray });
});

app.get('/unsubscribe', function(req, res) {
	var currentSubs = req.cookies.subbed_topics;
	console.log(currentSubs);
	res.cookie('subbed_topics', '');
	res.render('unsubscribe', { resub: currentSubs });
});

app.get('/delete', function(req, res) {
	res.render('delete');
});

app.get('/delete-success', function(req, res) {
	res.clearCookie('email');
	res.clearCookie('email_frequency');
	res.clearCookie('saved_details');
	res.clearCookie('seen_confirmation');
	res.clearCookie('subbed_topics');
	res.render('delete-success');
});

app.get('/edit-details', function(req, res) {
	req.cookies.saved_details = 'false';
	res.cookie('saved_details', false);
	res.cookie('email_frequency', 'immediate');
	req.cookies.email_frequency = 'immediate';
	res.render('edit-details', { cookies: req.cookies } );
});

app.post('/edit-details', function(req, res) {
	res.cookie('saved_details', true);
	res.cookie('email_frequency', req.body.time);
	req.cookies.saved_details = 'true';
	req.cookies.email_frequency = req.body.time;
	res.render('edit-details', { cookies: req.cookies } );
});

app.get('/reset', function(req, res) {
	res.clearCookie('email');
	res.clearCookie('subbed_topics');
    res.send('Cookie deleted');
});

app.listen(port, function() {
	console.log('Server started on port: ' + port);
});
