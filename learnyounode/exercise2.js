var argv = process.argv;

//argv.shift();
//argv.shift();

var sum = 0;
argv.forEach(function(arg){
	var argNumber = Number(arg);

	if(!isNaN(argNumber)){
		sum+=argNumber;
	}
});


console.log(sum);
