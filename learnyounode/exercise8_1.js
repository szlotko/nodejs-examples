var http = require("http");

var hostname = process.argv[2];

http.get(hostname, function(response){
	response.setEncoding("utf8");

	var alldata = "";

	response.on("data", function(data){
		alldata += data;
	});

	response.on("end", function(){
		console.log(alldata.length);
		console.log(alldata);
	});
});
