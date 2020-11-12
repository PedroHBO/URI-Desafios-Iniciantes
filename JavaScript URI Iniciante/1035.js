var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var a= parseInt(lines.shift());
var b= parseInt(lines.shift());
var c= parseInt(lines.shift());
var d= parseInt(lines.shift());
var ab = a+b;
var cd = c+d;

if(b>c && d>a && cd>ab && c>0 && d>0 && a%2==0){
    console.log("Valores aceitos");
}
else{
    console.log("Valores nao aceitos");
}