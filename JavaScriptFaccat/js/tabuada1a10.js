alert("Bem vindo ao tabuFácil")

let numero = parseInt(prompt("Digite um numero: "))
let contadora 
let valor
let resultado

for (contadora = 0; contadora <= 10; contadora++){
    resultado = contadora * numero
    alert("O resultado de " + numero + " * " + contadora + " é: " + resultado)
}

