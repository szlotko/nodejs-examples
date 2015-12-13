// solution is not correct
module.exports = function (cmd, args) {
    var spawn = require("child_process").spawn,
        duplexer2 = require("duplexer2");

    var cmd = spawn(cmd, args);

    return duplexer2(cmd.stdin, cmd.stdout);
};
