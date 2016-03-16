var express = require('express');
var app = express();

var logger = require('./logger');

app.use(logger);

var dogs = require('./routes/dogs');

app.use('/dogs',dogs);

//converts name parameter to proper
app.param('name', function(request,response,next){
	
})

app.get('/', function(request,response){
	response.send('Hi! This is an app testing out some express.js functionality.');
});


app.listen(3000, function(){
	console.log('listening on port 3000');
});