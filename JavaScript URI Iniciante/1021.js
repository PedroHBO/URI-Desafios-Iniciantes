// NAO FUNCIONA NO URI
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var din= parseFloat(lines.shift());
var n100=0;
var n50=0;
var n20=0;
var n10=0;
var n5=0;
var n2=0;
var m1=0;
var m05=0;
var m025=0;
var m010=0;
var m005=0;
var m001=0;

while(din>=100){
    din= din-100;
    n100++;
}
if(din<100){
    while(din>=50){
        din= din-50;
        n50++;
    }
}
if(din<50){
    while(din>=20){
        din= din-20;
        n20++;
    }
}
if(din<20){
    while(din>=10){
        din= din-10;
        n10++;
    }
}
if(din<10){
    while(din>=5){
        din= din-5;
        n5++;
    }
}if(din<5){
    while(din>=2){
        din= din-2;
        n2++;
    }
}if(din<2){
    while(din>=1){
        din= din-1;
        m1++;
    }
}if(din<1){
    while(din>=0.5){
        din= din-0.5;
        m05++;
    }
}if(din<0.5){
    while(din>=0.25){
        din= din-0.25;
        m025++;
    }
}if(din<0.25){
    while(din>=0.10){
        din= din-0.10;
        m010++;
    }
}if(din<0.10){
    while(din>=0.05){
        din= din-0.05;
        m005++;
    }
}if(din<0.05){
    while(din>=0.01){
        din= din-0.01;
        m001++;
    }
}
console.log("NOTAS:");
console.log(n100 + " nota(s) de R$ 100.00");
console.log(n50 + " nota(s) de R$ 50.00");
console.log(n20 + " nota(s) de R$ 20.00");
console.log(n10 + " nota(s) de R$ 10.00");
console.log(n5 + " nota(s) de R$ 5.00");
console.log(n2 + " nota(s) de R$ 2.00");
console.log("MOEDAS:");
console.log(m1 + " moeda(s) de R$ 1.00");
console.log(m05 + " moeda(s) de R$ 0.50");
console.log(m025 + " moeda(s) de R$ 0.25");
console.log(m010 + " moeda(s) de R$ 0.10");
console.log(m005 + " moeda(s) de R$ 0.05");
console.log(m001 + " moeda(s) de R$ 0.01");