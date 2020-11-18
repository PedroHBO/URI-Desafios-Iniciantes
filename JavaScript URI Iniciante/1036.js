var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var a = parseFloat(lines.shift());
var b = parseFloat(lines.shift());
var c = parseFloat(lines.shift());
var delta = Math.pow(b, 2) - (4 * a * c);



if (delta <= 0 || a === 0) {
    console.log("Impossivel calcular");
}
else {
    var xmais = (-b + (Math.sqrt(delta))) / (2 * a);
    var xmenos = (-b - (Math.sqrt(delta))) / (2 * a);
    console.log("R1 = " + xmais.toFixed(5));
    console.log("R2 = " + xmenos.toFixed(5));
}
