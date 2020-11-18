var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var raio = parseFloat(lines.shift());

var tt = (4.0 / 3) * 3.14159 * (Math.pow(raio, 3));

console.log("VOLUME = " + tt.toFixed(3));