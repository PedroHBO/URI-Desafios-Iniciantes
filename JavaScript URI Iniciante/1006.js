var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift()).toFixed(1);
var b = parseFloat(lines.shift()).toFixed(1);
var c = parseFloat(lines.shift()).toFixed(1);

var media = (a * 2 + b * 3 + c * 5) / 10;

console.log("MEDIA = " + media.toFixed(1));
