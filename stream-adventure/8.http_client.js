var request = require("request");

var url = "http://localhost:8099";

var postRequest = request.post(url);

process.stdin
    .pipe(postRequest)
    .pipe(process.stdout);
