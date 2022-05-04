let pergunta = String;

do {
    let resultado = 1;
    let fator = window.prompt("digite um numero inteiro até 16");
    while (fator > 16 || fator < 0) {
        fator = window.prompt("digite novamente um numero maior que 0 e menor que 16");
    }
    for (let i = 1; i <= fator; i++) {
        resultado *= i;
        alert(resultado);
    }
    pergunta = window.prompt("deseja continuar? S or N").toUpperCase;
} while (pergunta != "S");