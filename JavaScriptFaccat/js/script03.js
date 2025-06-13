alert("Exercicio das Maçãs")
let macasCompradas = parseFloat(prompt("Digite a quantia de maçãs que foram compradas"))
let valorMaca = 0


if (macasCompradas <= 12){
    valorMaca = 1.30 * macasCompradas
    alert("O preço total das maças é : " + valorMaca)
}else{
    valorMaca = 1.00 * macasCompradas
    alert("O preço total foi de : " + valorMaca)
}
