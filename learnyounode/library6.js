module.exports = getFilesFromDirectory;

function getFilesFromDirectory(directory, extname, callback){

	var fs = require("fs"),
		path = require("path");
		
	fs.readdir(directory, function(err, list){
		
		if(err){
			callback(err);
			return;
		}

		var regex = new RegExp("^\." + extname + "$");

		var requiredFiles = list.filter(function(l){
			return regex.test(path.extname(l));
		});

		callback(null, requiredFiles);
	});
}
	

