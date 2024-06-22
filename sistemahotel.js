// Sistema de hotel
let readlineSync = require('readline-sync');

let tipoQuarto = readlineSync.question("Qual tipo de quarto? ")
let quantidadeDias = readlineSync.question("Quantas diárias? ")

if (tipoQuarto == "standard") {
    let calculoStandart = quantidadeDias * 150
    console.log(`Tipo de quarto: Standard
        Quantidade de diárias: ${quantidadeDias}
        Valor total da estadia: R$ ${calculoStandart.toFixed(2)}`);
} else if (tipoQuarto == "luxo") {
    let calculoLuxo = quantidadeDias * 300
    console.log(`Tipo de quarto: Luxo
        Quantidade de diárias: ${quantidadeDias}
        Valor total da estadia: R$ ${calculoLuxo.toFixed(2)}`);
} else if (tipoQuarto == "suite") {
    let calculoSuite = quantidadeDias * 500
    console.log(`Tipo de quarto: Suíte
        Quantidade de diárias: ${quantidadeDias}
        Valor total da estadia: R$ ${calculoSuite.toFixed(2)}`);
    }
