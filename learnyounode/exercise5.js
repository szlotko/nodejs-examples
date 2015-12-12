var fs = require("fs"),
	path = require("path");

var directory = process.argv[2],
	extname = process.argv[3];

fs.readdir(directory, function(err, list){
	if(err) return;

	list.filter(function(l){
		return "." + extname === path.extname(l);
	})
	.forEach(function(l){
		console.log(l);
	});


});
