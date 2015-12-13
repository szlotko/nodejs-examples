var duplexer2 = require("duplexer2"),
    through2 = require('through2');

module.exports = function(counter){

    var counts = {};
    var stream = through2.obj(function(country, encoding, next){
        if(counts[country.country] == undefined){
            counts[country.country] = 0;
        }
        counts[country.country]++;
        next();
    }, function(){
        counter.setCounts(counts);
    });

    return duplexer2(stream, counter);
}
