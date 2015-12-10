var fileName = process.argv[2];

var fs = require("fs");

fs.readFile(fileName, "utf-8", function(err, data){
	if(err) throw err;

	lineCount = data.split('\n').length - 1;

	console.log(lineCount);
});
