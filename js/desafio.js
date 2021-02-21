//1- capture elementos HTML - valor/hora, horas/projeto, resultado
//2- ligue o clique do botão e teste no console para ver se está funcionando
//3- Converta os valores para números
//4- Calcule o valor/hora vezes horas/projeto
//5- Converta o resultado para 2 casas decimais
//6- Trocar resposta pelo resultado da operação


// valorHora
var valorHora = document.getElementById("valor-hora")
console.log(valorHora)

//horasProjeto
var horasProjeto = document.getElementById("horas-projeto")
console.log(horasProjeto)

//resposta
var resultado = document.getElementById("resposta")
console.log(resultado)

//ligue o botão + calculo da operação + resultado
function calcular () {
    console.log("O clique tá babado!")

    var valor = valorHora.valueAsNumber
    var projeto = horasProjeto.valueAsNumber

    var calculoTotal = (valor * projeto).toFixed(2)
    console.log(calculoTotal)

    resultado.textContent = "R$ " + calculoTotal

}