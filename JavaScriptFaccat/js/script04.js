alert("Cálculo das médias");
let nota1 = parseFloat(prompt("Digite a sua primeira nota : "));
let nota2 = parseFloat(prompt("Digite a sua segunda nota : "));
let media = 0;

media = (nota1 + nota2 )/2;

if (media >= 6){
    alert("Você foi aprovado!")
}else {
    alert("Você foi reprovado!")
}
