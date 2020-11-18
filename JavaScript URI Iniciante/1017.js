var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var km = 12;
var tempg = parseInt(lines.shift());
var velm = parseInt(lines.shift());

var litros = (tempg * velm) / km;
console.log(litros.toFixed(3));
