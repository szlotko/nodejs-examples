var getFilesFromDirectory = require("./library6");

var directory = process.argv[2],
	extname = process.argv[3];

getFilesFromDirectory(directory, extname, function(err, files){
	if(err){ 
		console.log(err);
		return;
	}

	files.forEach(function(f){
		console.log(f);
	});
});
