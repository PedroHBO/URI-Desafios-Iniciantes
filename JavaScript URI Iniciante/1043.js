var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());

if (a < b + c && b < a + c && c < a + b) {
    console.log("Perimetro = " + (a + b + c).toFixed(1));
}
else {
    console.log("Area = " + ((a + b) * c / 2).toFixed(1));
}