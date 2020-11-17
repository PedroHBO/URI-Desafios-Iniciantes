var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var ini = parseInt(lines.shift());
var fim = parseInt(lines.shift());
if (fim < ini) {
    var temp = Math.abs((ini - 24)) + fim;
}
else if (fim === ini) {
    var temp = 24;
}
else {
    var temp = fim - ini;
} 

console.log("O JOGO DUROU " + temp + " HORA(S)");