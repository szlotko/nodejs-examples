var http = require("http");

var hostname = process.argv[2];

http.get(hostname, function(response){

	response.setEncoding("utf8");

	response.on("data", function(data){
		console.log(data);
	});

	response.on("error", function(error){
		console.log(error);
	});
});
