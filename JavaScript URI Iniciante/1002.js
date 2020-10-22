var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n=3.14159;
var raio= parseFloat(lines.shift());
var area= n * (raio * raio);
var resultado= area.toFixed(4);
console.log("A=" + resultado);
