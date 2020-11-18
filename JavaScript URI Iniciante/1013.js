var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseInt(lines.shift());

var maiorab = (a + b + Math.abs(a - b)) / 2;
var maiorbc = (b + c + Math.abs(b - c)) / 2;

if (maiorbc >= maiorab) {
    console.log(maiorbc + " eh o maior");
}
else {
    console.log(maiorab + " eh o maior");
}

