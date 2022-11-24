let listaTipoComida = ["Frutas", "Laticinios", "Congelados", "Doces"]
let frutas = []
let laticinios = []
let congelados = []
let doces = []
let listaComida = []

let inserirComida = prompt("Deseja inserir uma comida na sua lista? SIM ou NÃO")
while (inserirComida == "SIM") {
    if (!nomeComida) {
        let removerElemento = prompt("Você deseja remover um elemento? SIM ou NÃO")
        if (removerElemento == "SIM") {
           let comidaRemovida = prompt(`Informe qual comida você deseja remover ${listaComida}`)
           var pos = listaComida.indexOf(comidaRemovida)
           listaComida.splice(pos, 1)   
           console.log("Item removido!")        
        }
    }
    let nomeComida = prompt("Qual comida você deseja inserir?")
    listaComida.push(nomeComida)
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