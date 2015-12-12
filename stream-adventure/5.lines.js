var through2 = require("through2"),
    split = require("split");

var transform = through2(transformFunction);

var lineIndex = 0;
function transformFunction(line, encoding, next){
    lineIndex++;
    var inStr = line.toString();
    inStr = lineIndex % 2 == 0 ? inStr.toUpperCase() : inStr.toLowerCase();
    this.push(inStr + "\n");
    next();
}

process.stdin
    .pipe(split())
    .pipe(transform)
    .pipe(process.stdout);
