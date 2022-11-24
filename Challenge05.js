let listaTipoComida = ["Frutas", "Laticinios", "Congelados", "Doces"]
let frutas = []
let laticinios = []
let congelados = []
let doces = []

let inserirComida = prompt("Deseja inserir uma comida na sua lista? SIM ou NÃO")
while (inserirComida == "SIM") {
    let nomeComida = prompt("Qual comida você deseja inserir?")
    let inserirTipo = prompt(`Qual dessas opcções ela se encaixa? ${listaTipoComida}`)
    switch (inserirTipo) {
        case "Frutas":
            frutas.push(nomeComida)
            break;
        case "Laticinios":
            laticinios.push(nomeComida)
            break
        case "Congelados":
            congelados.push(nomeComida)
            break
        case "Doces":
            doces.push(nomeComida)
        default:
            console.log("Essa categoria não existe.")
            break;
    }
    inserirComida = prompt("Deseja inserir uma comida na sua lista? SIM ou NÃO")
}

console.log(`Lista de compras: \n Frutas: \n ${frutas} \n Laticinios: \n ${laticinios} \n Congelados: \n ${congelados} \n Doces: \n ${doces}`)