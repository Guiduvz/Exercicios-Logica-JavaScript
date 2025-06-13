alert("Validar o voto")
let anoAtual = parseInt(prompt("Digite o ano atual : "))
let anoNascimento = parseInt(prompt("Digite o ano no qual você nasceu : "))

let resultadoFinal = anoAtual - anoNascimento

if (resultadoFinal >=16){
    alert("Você tem "+ resultadoFinal + " anos, ja pode votar.")
}else{
    alert("Você tem "+ resultadoFinal + " anos, ainda não poderá votar.")
}

