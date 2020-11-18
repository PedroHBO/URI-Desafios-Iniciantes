var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var sal = parseFloat(lines.shift());

if (sal >= 0 && sal <= 400) {
    console.log("Novo salario: " + (sal * 1.15).toFixed(2));
    console.log("Reajuste ganho: " + (sal * 0.15).toFixed(2));
    console.log("Em percentual: 15 %");
}
else if (sal > 400 && sal <= 800) {
    console.log("Novo salario: " + (sal * 1.12).toFixed(2));
    console.log("Reajuste ganho: " + (sal * 0.12).toFixed(2));
    console.log("Em percentual: 12 %");
}
else if (sal > 800 && sal <= 1200) {
    console.log("Novo salario: " + (sal * 1.10).toFixed(2));
    console.log("Reajuste ganho: " + (sal * 0.10).toFixed(2));
    console.log("Em percentual: 10 %");
}
else if (sal > 1200 && sal <= 2000) {
    console.log("Novo salario: " + (sal * 1.07).toFixed(2));
    console.log("Reajuste ganho: " + (sal * 0.07).toFixed(2));
    console.log("Em percentual: 7 %");
}
else {
    console.log("Novo salario: " + (sal * 1.04).toFixed(2));
    console.log("Reajuste ganho: " + (sal * 0.04).toFixed(2));
    console.log("Em percentual: 4 %");
}