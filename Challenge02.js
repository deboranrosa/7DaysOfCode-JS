let nome = prompt("Qual o seu nome?")
let idade = prompt("Quantos anos você tem?")
let nomeLinguagem = prompt("Qual linguagem de programação você está estudando?")

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${nomeLinguagem}`)

let opiniaoLinguagem = prompt(`Você gosta de estudar ${nomeLinguagem}? Digite 1 para SIM e 2 para NÃO`)

if (opiniaoLinguagem == 1 || opiniaoLinguagem == '1') {
    console.log("Muito bom! Continue estudando e você terá muito sucesso!")
} else {
    console.log("Ahh que pena... Já tentou aprender outras linguagens?")
}

