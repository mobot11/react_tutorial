var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/build'));
var notes = [
	{
			"author": "Pete Hunt",
			"text": "Hey there!"
	},
	{
			"author": "Paul O’Shannessy",
			"text": "React is okay at best!"
	}
];
app.get('/comments', function(req, res) {
	res.json(notes);
});
app.post('/comments', function(req,res) {
  notes.push(req.body);
	res.json({msg: "comment was saved"});
});
app.listen(process.env.port || 3000, function() {
	console.log('server is running on port ' + (process.env.port || 3000));
});
