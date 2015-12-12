var through2 = require("through2");

var transform = through2(transformFunction);

function transformFunction(buffer, encoding, next){
    var transformed = buffer.toString().toUpperCase();
    this.push(transformed);
    next();
}


process.stdin
    .pipe(transform)
    .pipe(process.stdout);
