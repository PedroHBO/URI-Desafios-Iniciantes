var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var posit = 0;
var negat = 0;
var impar = 0;
var par = 0;
var num1 = parseInt(lines.shift());
var num2 = parseInt(lines.shift());
var num3 = parseInt(lines.shift());
var num4 = parseInt(lines.shift());
var num5 = parseInt(lines.shift());

if(num1===0 || num2===0 || num3===0 || num4===0 || num5===0){
    par++;
}

if (num1 > 0) {
    posit++;
    if (num1 % 2 === 0) {par++;}
    else {impar++;}
}
if (num1 < 0) {
    negat++;
    if (num1 % 2 === 0) {par++;}
    else {impar++;}
}

if (num2 > 0) {
    posit++;
    if (num2 % 2 === 0) {par++;}
    else {impar++;}
}
if (num2 < 0) {
    negat++;
    if (num2 % 2 === 0) {par++;}
    else {impar++;}
}

if (num3 > 0) {
    posit++;
    if (num3 % 2 === 0) {par++;}
    else {impar++;}
}
if (num3 < 0) {
    negat++;
    if (num3 % 2 === 0) {par++;}
    else {impar++;}
}

if (num4 > 0) {
    posit++;
    if (num4 % 2 === 0) {par++;}
    else {impar++;}
}
if (num4 < 0) {
    negat++;
    if (num4 % 2 === 0) {par++;}
    else {impar++;}
}

if (num5 > 0) {
    posit++;
    if (num5 % 2 === 0) {par++;}
    else {impar++;}
}
if (num5 < 0) {
    negat++;
    if (num5 % 2 === 0) {par++;}
    else {impar++;}
}


console.log(par + " valor(es) par(es)");
console.log(impar + " valor(es) impar(es)");
console.log(posit + " valor(es) positivo(s)");
console.log(negat + " valor(es) negativo(s)");