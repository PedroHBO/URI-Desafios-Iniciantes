var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift('');
var fixo = parseFloat(lines.shift());
var montante = parseFloat(lines.shift());

var sal = (fixo + (montante * 0.15));

console.log("TOTAL = R$ " + sal.toFixed(2));