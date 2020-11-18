var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift());
var ano = 0;
var mes = 0;
var dia = 0;
while (valor >= 365) {
    valor = valor - 365;
    ano++;
}
if (valor < 365) {
    while (valor >= 30) {
        valor = valor - 30;
        mes++;
    }
}
if (valor < 30) {
    while (valor > 0) {
        valor = valor - 1;
        dia++;
    }
}

console.log(ano + " ano(s)");
console.log(mes + " mes(es)");
console.log(dia + " dia(s)");