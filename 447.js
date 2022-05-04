let ginasta;
do{
ginasta = window.prompt("Informe um nome valido");
}while(ginasta.length === 0);

let maiorNota= -82651692301651236;
let menorNota = 10000000000000000;
let media;
let nota1, nota2, nota3, nota4, nota5, nota6, nota7;
let soma;

for(let i= 0; i<7; i++){
    nota1 = Number(window.prompt("digite as notas dada ao atlela"));
    if (nota1>maiorNota){
        maiorNota=nota1
    }
    if(nota1<menorNota){
        menorNota=nota1
    }
    soma = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7
    media = (soma - (maiorNota + menorNota))/5
    
    switch(i){
    case 0:
    nota7 = nota1;
    break;
    case 1:
    nota6 = nota1;
    break;
    case 2:
    nota5 = nota1;
    break;
    case 3:
    nota4 = nota1;
    break;
    case 4:
    nota3 = nota1;
    break;
    case 5:
    nota2 = nota1;
    break;
    case 6:
    nota1 = nota1;
    break;
    }
    console.log(`${nota1}`);
    console.log(`${nota2}`);
    console.log(`${nota3}`);
    console.log(`${nota4}`);
    console.log(`${nota5}`);
    console.log(`${nota6}`);
    console.log(`${nota7}`);
}
document.write("Resultado Final");
document.write(`Atleta: ${ginasta}`);
document.write(`Melhor nota: ${maiorNota}`);
document.write(`Pior nota: ${menorNota}`);
document.write(`Media: ${media}`);