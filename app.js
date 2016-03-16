var express = require('express');
var app = express();

var logger = require('./logger');

var dogs = {
	'Roscoe': 'lab',
	'Hunter': 'shiba inu',
	'Maisy': 'bermese mountain dog'
};

app.use(logger);

//converts name parameter to proper
app.param('name', function(request,response,next){
	var name = request.params.name;
	var pName = name[0].toUpperCase() + name.slice(1).toLowerCase();

	request.name = pName;

	next();
})

app.get('/', function(request,response){
	response.send('Hello World');
});


app.get('/dogs/:name', function(request,response){
	var breed = dogs[request.name];

	if(!breed){
		response.status(404).json("No description found for " + request.params.name)
	} else {
		response.json(breed);
	}
});

app.listen(3000, function(){
	console.log('listening on port 3000');
});