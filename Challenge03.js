let devArea = prompt("Qual área você gostaria de seguir? Front-End ou BackEnd")

if(devArea == 'Front-End') {
    let frontArea = prompt("E você quer aprender React ou Vue?")
}
else {
    let backArea = prompt("E você quer aprender C# ou Java?")
}

let isFullStack = prompt("Você quer ser um desenvolvedor FullStack?")

if(isFullStack == 'Não' || isFullStack == 'NÃO') {
    console.log(`Muito bem! Então continue se especializando na area de ${devArea}.`)
} else {
    console.log("Muito bem! Continue se desenvolvendo para se tornar um Fullstack.")
}

let question = ''
while(question == "SIM") {
    let tecnologies = prompt("Tem mais alguma tecnologia que você gostaria de aprender? SIM ou NÃO")
    let listTecnologies = []
    if(tecnologies == 'SIM') {
        let whatTecnologies = prompt("Quais tecnologias?")
        listTecnologies = [whatTecnologies]
        question = tecnologies
    }
    else {
        break
        console.log(`As seguintes tecnologias ${listTecnologies} são otimas para serem aprendidas.`)
    }    
}
