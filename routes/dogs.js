var express = require('express');
var router = express.Router();

var dogs = {
	'Roscoe': 'lab',
	'Hunter': 'shiba inu',
	'Maisy': 'bermese mountain dog'
};

router.route('/:name')
	.all(function(request,response,next){
		var name = request.params.name;
		var pName = name[0].toUpperCase() + name.slice(1).toLowerCase();

		request.name = pName;

		next();
	})

	.get(function(request,response){
		var breed = dogs[request.name];

		if(!breed){
			response.status(404).json("No description for " + request.name);
		} else {
			response.status(200).json(request.name + ' is a ' + breed);
		}
	})

module.exports = router;