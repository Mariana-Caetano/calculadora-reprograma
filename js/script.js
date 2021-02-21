console.log("Olá, reprograma!")

//salario
var salario = document.getElementById("ganho-mes")
console.log(salario)

//horasDia
var horasDia = document.getElementById("horas-dia")
console.log(horasDia)

//resposta

var resposta = document.getElementById("resposta")
console.log(resposta)

function calcularValorHora() {
    console.log("O clique está funcionando, gatinha")

    var totalHoras = horasDia.valueAsNumber * 22
    console.log(totalHoras)

    var valorHora = (salario.valueAsNumber/totalHoras).toFixed(2)
    console.log(valorHora)
    resposta.textContent = "R$ " + valorHora
}