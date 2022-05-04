let Atleta = window.prompt("Digite o nome do Atleta");
let melhorSalto, menorSalto, soma=0;
let media = [];
let saltos =[];
let pinto;

if (Atleta.length > 0 && Atleta.length < 100) {
    for (let i = 1; i <= 5; i++) {
      saltos.push(
        Number(
          window.prompt(
            "Digite o valor do salto em Metros.\nObs: Favor utilizar '.' ao invés de ','."
          )
        )
      );
    }
    menorSalto = Math.min(...saltos);
    melhorSalto = Math.max(...saltos);
  } else {
    alert("Atleta não informado, programa não pode ser executado");
  }

  saltos.forEach(element => {
      if(element > menorSalto && element < melhorSalto){
          media.push(element);
      }
  });
media.forEach(element => {
    soma+=element;

});
pinto = soma / media.length 
document.write(`Atleta: ${Atleta}<br><br>Primeiro Salto: ${saltos[0]}<br>Segundo Salto: ${saltos[1]}<br>Terceiro Salto: ${saltos[2]}<br>Quarto Salto: ${saltos[3]}<br>Quinto Salto: ${saltos[4]}<br><br> Melhor Salto: ${melhorSalto}<br>Pior Salto: ${menorSalto}<br>Media dos demais Saltos: ${pinto}`);