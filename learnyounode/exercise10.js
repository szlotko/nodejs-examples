var net = require("net"),
    strftime = require("strftime");

var port = Number(process.argv[2]);

var server = net.createServer(function(socket){

    var date = strftime("%Y-%m-%d %H:%M\n", new Date());
    socket.end(date);
});

server.listen(port);
