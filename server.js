var express = require('express');
var app = express();
app.use(express.static(__dirname + '/build'));

app.listen(process.env.port || 3000, function() {
	console.log('server is running on port ' + (process.env.port || 3000))
});