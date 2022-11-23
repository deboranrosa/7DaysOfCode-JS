let valorInicial = Math.floor(Math.random() * (10 - 0 + 1) + 0)
let acertou = false
let valorJogada = ""

for (let index = 0; index < 3; index--) {
    valorJogada = prompt("Qual o valor sorteado?")

    if (valorJogada == valorInicial) {
        console.log(`Parabens! O valor sorteado era ${valorInicial}! Você acertou.`)
        acertou = true
        break
    }
    
    console.log("Você errou! Tente novamente")   
}

if(!acertou) {
    console.log(`Suas chances acabaram... O número sorteado era ${valorInicial}`)
}
