var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());
var i=0
while(i<=11) {
    if (x % 2 === 1) {
        console.log(x);
    }
    x++;
    i++;
}