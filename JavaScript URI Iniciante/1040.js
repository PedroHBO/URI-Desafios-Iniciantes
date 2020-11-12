var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n')

var [n1, n2, n3, n4] = lines[0].split(" ");
var media = (((parseFloat(n1) * 2) + (parseFloat(n2) * 3) + (parseFloat(n3) * 4) + (parseFloat(n4) * 1)) / 10).toFixed(1);

if (media >= 7) {
    console.log("Media: " + media);
    console.log("Aluno aprovado.");
}
else if (media < 5) {
    console.log("Media: " + media);
    console.log("Aluno reprovado.");
}
else {
    var [exame] = lines[1].split(" ");
    var mediaf = (((parseFloat(media) + parseFloat(exame)) / 2).toFixed(1));

    console.log("Media: " + media);
    console.log("Aluno em exame.");
    console.log("Nota do exame: " + exame);
    if (mediaf >= 5) {
        console.log("Aluno aprovado.");
        console.log("Media final: " + mediaf);
    }
    else {
        console.log("Aluno reprovado.");
        console.log("Media final: " + mediaf);
    }
}

