var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var resul = b % a;
var resul2 = a % b; 

if (resul === 0 || resul2 === 0) {
    console.log("Sao Multiplos");
}
else {
    console.log("Nao sao Multiplos");
}
