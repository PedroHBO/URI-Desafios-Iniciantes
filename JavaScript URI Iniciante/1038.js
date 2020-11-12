var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var prod = parseInt(lines.shift());
var quant = parseInt(lines.shift());

if (prod === 1) {
    var result = 4.00;
}
if (prod === 2) {
    var result = 4.50;
}
if (prod === 3) {
    var result = 5.00;
}
if (prod === 4) {
    var result = 2.00;
}
if (prod === 5) {
    var result = 1.50;
}
console.log("Total: R$ " + (result * quant).toFixed(2));