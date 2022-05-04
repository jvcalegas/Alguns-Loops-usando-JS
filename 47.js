let ginasta = window.prompt("digite seu nome");

let maiorNota, menorNota, soma = 0;
let arrayNotas = [];
let arrayMedia = [];
let media;

if(ginasta.length > 0 && ginasta.length < 100){
    for(let i=1; i<=7; i++){
        arrayNotas.push(Number(window.prompt("Digite a nota")));
    }
    maiorNota = Math.max(...arrayNotas);
    menorNota = Math.min(...arrayNotas);
}
else{
    alert("Atleta não informado, programa não pode ser executado");
}

arrayNotas.forEach(element => {
    if(element > menorNota && element < maiorNota){
        arrayMedia.push(element);
    }
});

arrayMedia.forEach(element => {
    soma+=element;
});
media = soma / arrayMedia.length

console.log(arrayNotas);
console.log(arrayMedia);
console.log(media);
