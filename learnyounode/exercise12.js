var http = require("http"),
    map = require("through2-map");

var port = Number(process.argv[2]);

var server = http.createServer(function(request, response){

    if(request.method != "POST"){
        response.statusCode = 404;
        response.end();
        return;
    }

    request
        .pipe(map(function(data){
                return data.toString().toUpperCase();
        }))
        .pipe(response);

});

server.listen(port);
