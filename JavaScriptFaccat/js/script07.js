alert("Ordem crescente")
let numero1 = parseInt(prompt("Digite o primeiro numero : "))
let numero2 = parseInt(prompt("Digite o segundo numero (diferente do primeiro) : "))

if (numero1 > numero2){
    alert(numero1  + "\n" + numero2)
}else{
    alert(numero2 + "\n"  + numero1)
}