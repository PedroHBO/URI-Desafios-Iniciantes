var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var din = parseInt(lines.shift());
var n100 = 0;
var n50 = 0;
var n20 = 0;
var n10 = 0;
var n5 = 0;
var n2 = 0;
var n1 = 0;

while (din >= 100) {
    din = din - 100;
    n100++;
}
if (din < 100) {
    while (din >= 50) {
        din = din - 50;
        n50++;
    }
}
if (din < 50) {
    while (din >= 20) {
        din = din - 20;
        n20++;
    }
}
if (din < 20) {
    while (din >= 10) {
        din = din - 10;
        n10++;
    }
}
if (din < 10) {
    while (din >= 5) {
        din = din - 5;
        n5++;
    }
} if (din < 5) {
    while (din >= 2) {
        din = din - 2;
        n2++;
    }
} if (din < 2) {
    while (din >= 1) {
        din = din - 1;
        n1++;
    }
}
console.log(n100 * 100 + n50 * 50 + n20 * 20 + n10 * 10 + n5 * 5 + n2 * 2 + n1 * 1);
console.log(n100 + " nota(s) de R$ 100,00");
console.log(n50 + " nota(s) de R$ 50,00");
console.log(n20 + " nota(s) de R$ 20,00");
console.log(n10 + " nota(s) de R$ 10,00");
console.log(n5 + " nota(s) de R$ 5,00");
console.log(n2 + " nota(s) de R$ 2,00");
console.log(n1 + " nota(s) de R$ 1,00");