var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var s1 = parseFloat(lines.shift());
var s2 = parseFloat(lines.shift());
var s3 = parseFloat(lines.shift());
var s4 = parseFloat(lines.shift());
var s5 = parseFloat(lines.shift());
var s6 = parseFloat(lines.shift());
var cont = 0;

if (s1 > 0) {
    cont++;
}
if (s2 > 0) {
    cont++;
}
if (s3 > 0) {
    cont++;
}
if (s4 > 0) {
    cont++;
}
if (s5 > 0) {
    cont++;
}
if (s6 > 0) {
    cont++;
}
console.log(cont + " valores positivos");