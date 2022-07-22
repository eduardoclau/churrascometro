var inputadultos = document.getElementById("adultos");
var inputCriancas = document.getElementById("Criancas");
var inputTempo = document.getElementById("tempo");

var resultado = document.getElementById("resultado");

function calcular() {

    var adultos = inputadultos.value;
    var Criancas = inputCriancas.value;
    var tempo = inputTempo.value

    var quantidadetotaldecarne = carnePP(tempo) * adultos + (carnePP(tempo) / 2 * Criancas);
    var quantidadetotaldecerveja = cervejaPP(tempo) * adultos;
    var quantidadetotaldebebidas = bebidaPP(tempo) * adultos + (carnePP(tempo) / 2 * Criancas);

    resultado.innerHTML = `<p> ${quantidadetotaldecarne}g de Carne</p>`
    resultado.innerHTML += `<p> ${quantidadetotaldecerveja}ml de Cerveja</p>`
    resultado.innerHTML += `<p> ${quantidadetotaldebebidas}ml de Bebida</p>`

}

function carnePP(tempo) {
    if(tempo >= 6){
        return 650;}
        else{
            return 400;
        }

}

function cervejaPP(tempo){
    if(tempo >=6){
        return 2000;
    } else{
        return 1200;
    }


}

function bebidaPP(tempo){
    if (tempo>=6){
        return 1500;
    } else{
        return 1000;
    }

}


