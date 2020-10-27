var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var sec = parseInt(lines.shift());
var min = 0;
var hr = 0;

while(sec>=60){
    sec= sec-60;
    min= min+1;
    while(min>=60){
        min= min-60;
        hr= hr+1;
        
    }
}

console.log(hr + ":" + min + ":" + sec);