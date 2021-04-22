// Carne - 400 gr por pessoa + de 6 horas - 650
//Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebida = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebida / 2000)} Garrafas de Refrigerante</p>`

resultado.innerHTML = `<p class="result-info">Isto é tudo o que você vai precisar:</p><br>`
resultado.innerHTML += `<div class="result"> 
<img src="./image/beef.png"/> ${qdtTotalCarne / 1000} Kg de Carne</img>
</div>
`
resultado.innerHTML += `
  <div class="result">
    <img src="./image/beer.png"/> ${Math.ceil(qdtTotalCerveja/355)} latas de Cerveja</img>
  </div>
`
resultado.innerHTML += `
  <div class="result">
    <img src="./image/soda.png"/> ${Math.ceil(qdtTotalBebida/2000)} garrafas de Refrigerante</img>  
  </div>`
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }
    else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }
    else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }
    else{
        return 1000;
    }
}

    // Efeito de cor no Botão
function onOver(elemento){
    elemento.style.backgroundColor = "rgb(9, 10, 17)"
}
function onOut(elemento){
    elemento.style.backgroundColor = "rgb(8, 117, 180)"
}
