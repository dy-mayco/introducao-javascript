var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

/*
console.log(paciente);  //tr
console.log(tdPeso);    // td que tem peso
console.log(tdAltura);  //td que tem altura
console.log(peso);      //valor do peso
console.log(altura);    //valor da altura
*/

var pacientes = document.querySelectorAll(".paciente");

for (var i=0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = document.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = document.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;
    //validar os dados de peso
    if (peso <= 0 ||  peso >= 1000) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
    }
    //validar a altura
    if (altura <=0 || altura > 3){
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
    }
    //validar peso e altura
    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura*altura);
        tdImc.textContent = imc;
    }

}