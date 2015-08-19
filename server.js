var express = require('express');
var app = express();
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
  console.log(req.body);

	res.json(notes);
});
app.listen(process.env.port || 3000, function() {
	console.log('server is running on port ' + (process.env.port || 3000));
});
