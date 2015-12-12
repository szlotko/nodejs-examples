var http = require("http"),
    fs = require("fs");

var port = Number(process.argv[2]),
    filePath = process.argv[3];

var server = http.createServer(function(request, response){

    var fileStream = fs.createReadStream(filePath, {autoClose: true});

    response.writeHeader(200, {
        "Content-Type": "text/plain"
    });
    fileStream.pipe(response);
});

server.listen(port);
