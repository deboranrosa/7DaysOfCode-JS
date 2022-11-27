let calcular = prompt("Gostaria de fazer algum calculo?")
let opcoesOperacao = ["SOMAR", "SUBTRAIR", "MULTIPLICAR", "DIVIDIR"]

function somar(num1, num2) {
    
    let numero1 = num1
    let numero2 = num2

    let resultado = Number(numero1) + Number(numero2)

    return alert(`O resultado da soma foi ${resultado}`)
}

function subtrair(num1, num2) {

    let numero1 = num1
    let numero2 = num2
    
    let resultado =  Number(numero1) - Number(numero2)

    return alert(`O resultado da subtração foi ${resultado}`)
}

function multiplicar(num1, num2) {

    let numero1 = num1
    let numero2 = num2

    let resultado = Number(numero1) * Number(numero2)

    return alert(`O resultado da multiplicação foi ${resultado}`)    
}

function dividir(num1, num2) {

    let numero1 = num1
    let numero2 = num2

    let resultado = Number(numero1) / Number(numero2)

    return alert(`O resultado da divisão foi ${resultado}`)   
}

while (calcular == "SIM") {
    let tipoOperacao = prompt(`Qual tipo de operação você gostaria? ${opcoesOperacao}`)
    let numero1 = prompt("Digite o primeiro valor")
    let numero2 = prompt("Digite o segundo valor")   

    switch (tipoOperacao) {
        case "SOMAR":
            somar(numero1, numero2)
            break;  
        case "SUBTRAIR":
            subtrair(numero1, numero2)
            break;
        case "MULTIPLICAR":
            multiplicar(numero1, numero2)
            break;
        case "DIVIDIR":
            dividir(numero1, numero2)
            break
        default:
            alert("Operação invalida");
            break;
    }
    calcular = prompt("Gostaria de fazer mais algum calculo?")
}




