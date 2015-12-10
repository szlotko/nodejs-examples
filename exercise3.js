var fileName = process.argv[2];

if(!fileName){
	console.log("File name is not defined.");
	return;
}

var fs = require("fs");


var fileContent = fs.readFileSync(fileName, {encoding: 'ASCII'});

var lineCount = fileContent.split('\n').length - 1; 

console.log(lineCount);
