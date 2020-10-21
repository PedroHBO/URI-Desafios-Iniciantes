var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var num= parseInt(lines.shift());
var hora= parseInt(lines.shift());
var valor= parseFloat(lines.shift()).toFixed(2);

var sal= (hora * valor);

console.log("NUMBER = " + num);
console.log("SALARY = U$ " + sal.toFixed(2));