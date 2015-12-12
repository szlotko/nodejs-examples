var http = require("http"),
	bl = require("bl");

var hostname = process.argv[2];

http.get(hostname, function(response){
	
	response.pipe(bl(function(err, data){

		if(err){
			console.log(err);
			return;
		}

		var content = data.toString("utf8");
		console.log(content.length);
		console.log(content);
	}));
});
