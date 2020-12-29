// NAO FUNCIONA NO URI
var input = require('fs').readFileSync('teste', 'utf8');
var lines = input.split('\n');

var media = 0;
var positivo = 0;
var num1 = parseFloat(lines.shift());
var num2 = parseFloat(lines.shift());
var num3 = parseFloat(lines.shift());
var num4 = parseFloat(lines.shift());
var num5 = parseFloat(lines.shift());
var num6 = parseFloat(lines.shift());


if (num1 > 0) { positivo++; media = media + num1; }
if (num2 > 0) { positivo++; media = media + num2; }
if (num3 > 0) { positivo++; media = media + num3; }
if (num4 > 0) { positivo++; media = media + num4; }
if (num5 > 0) { positivo++; media = media + num5; }
if (num6 > 0) { positivo++; media = media + num6; }

console.log(positivo + " valores positivos");
console.log((media / positivo).toFixed(1));
