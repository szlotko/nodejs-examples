var http = require("http"),
    through2 = require("through2");

var port = process.argv[2];

var transform = through2(function(buffer, encoding, next){
    var msg = buffer.toString();
    this.push(msg.toUpperCase());
    next();
});

http.createServer(function(request, response){

    if(request.method != "POST"){
        response.end();
        return;
    }

    request.pipe(transform).pipe(response);

}).listen(port);
