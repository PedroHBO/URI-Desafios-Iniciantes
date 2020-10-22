var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x =(90-60)/60;
var y =parseInt(lines.shift());

distancia = y/x;
console.log(distancia + " minutos");
