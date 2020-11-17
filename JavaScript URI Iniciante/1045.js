var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

lines.sort(function (a, b) {
    return b - a;
});

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());

if (a >= (b + c)) {
    console.log("NAO FORMA TRIANGULO");
}
else {
    if (a * a === (b * b + c * c)) {
        console.log("TRIANGULO RETANGULO");
    }
    if (a * a > (b * b + c * c)) {
        console.log("TRIANGULO OBTUSANGULO");
    }
    if (a * a < (b * b + c * c)) {
        console.log("TRIANGULO ACUTANGULO");
    }
    if (a === b && b === c) {
        console.log("TRIANGULO EQUILATERO");
    }
    if ((a === b && a !== c) || (a !== b && b === c) || (a === c && c !== b)) {
        console.log("TRIANGULO ISOSCELES");
    }
}