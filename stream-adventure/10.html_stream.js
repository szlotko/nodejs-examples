var trumpet = require("trumpet"),
    through2 = require("through2");

var tr = trumpet();

process.stdin.pipe(tr);

tr.selectAll(".loud", function(loudEl){
    loudEl.createReadStream()
        .pipe(through2(function(buffer, encoding, next){
            this.push(buffer.toString().toUpperCase());
            next();
        }))
        .pipe(loudEl.createWriteStream());
});

tr.pipe(process.stdout);
