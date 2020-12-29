var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var ren = parseFloat(lines.shift());

if (ren >= 0 && ren <= 2000) {
    console.log("Isento");
}
else if (ren > 2000 && ren <= 3000) {
    console.log("R$ " + (((ren - 2000) * 0.08)).toFixed(2));

}
else if (ren > 3000 && ren <= 4500) {
    console.log("R$ " + (((ren - 3000) * 0.18) + 80).toFixed(2));
}
else {
    console.log("R$ " + (((ren - 4500) * 0.28) + 350).toFixed(2));
}