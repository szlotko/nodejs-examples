var http = require("http"),
    url = require("url");

var port = Number(process.argv[2]);

var server = http.createServer(function(request, response){

    var parsedUrl = url.parse(request.url, true);

    if(parsedUrl.pathname != "/api/parsetime"
        && parsedUrl.pathname != "/api/unixtime"){
            response.statusCode = 501; // 501 Not Implemented
            response.end();
            return;
        }

    var isoDate = new Date(parsedUrl.query.iso || "");
    if(isNaN(isoDate.getTime())){

        response.statusCode = 400; // 400 Bad Request
        response.end();
        return;
    }

    response.writeHeader(200, {
        "Content-Type": "application/json"
    });

    if(parsedUrl.pathname == "/api/parsetime"){
        var parsetime = {
            hour: isoDate.getHours(),
            minute: isoDate.getMinutes(),
            second: isoDate.getSeconds()
        };

        response.write(JSON.stringify(parsetime));
    }

    if(parsedUrl.pathname == "/api/unixtime"){
        var unixtime = {
            unixtime: isoDate.getTime()
        };

        response.write(JSON.stringify(unixtime));
    }

    response.end();
});

server.listen(port);
