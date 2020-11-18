var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var info1 = lines.shift().split(' ');
var info2 = lines.shift().split(' ');

var cod1 = parseInt(info1.shift());
var num1 = parseInt(info1.shift());
var valor1 = parseFloat(info1.shift());
var total1 = num1 * valor1;

var cod2 = parseInt(info2.shift());
var num2 = parseInt(info2.shift());
var valor2 = parseFloat(info2.shift());

var total2 = num2 * valor2;

var tt = total1 + total2;

console.log("VALOR A PAGAR: R$ " + tt.toFixed(2));