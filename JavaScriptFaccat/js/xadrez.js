let inicioJogo = parseInt(prompt("Que horas o jogo iniciou?: "))
let finalJogo = parseInt(prompt("Que horas o jogo terminou?: "))
let tempoTotal 

tempoTotal = finalJogo - inicioJogo

    if(tempoTotal < 0){
        tempoTotal = tempoTotal + 24
    }

    alert("A duração total da partida foi: " + tempoTotal + " horas.")
