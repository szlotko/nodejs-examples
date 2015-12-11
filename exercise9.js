var http = require("http"),
	bl = require("bl");

var hostnames = process.argv.slice(2);
var results = [];

hostnames.forEach(function(h, i){

	http.get(h, function(response){
		response.setEncoding("utf8");

		response.pipe(bl(function(err, data){
			results[i] = {
				error: err,
				data: data.toString("utf8")
			}

			if(isAllResultsExisted()){
				showResults();
			}
		}));
	});

});

function isAllResultsExisted(){
	var existedResults = results.filter(function(r){ return r!= undefined; }).length;
	return existedResults == hostnames.length;
}

function showResults(){
	results.forEach(function(r){
		console.log(r.data || r.error);
	});
}
