var concat = require("concat-stream");

process.stdin.pipe(concat(function(msg){
    var reversed = msg.toString()
        .split("")
        .reverse()
        .join("");
    process.stdout.write(reversed);
}));
