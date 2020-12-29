var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x= parseInt(lines.shift());
var impar=1;
if( x>=1 && x<=1000){
    while(impar<=x){  
        if(impar<=x){
        console.log(impar);
        }
        impar=impar+2;
    }
}