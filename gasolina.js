// tipo => gasolina ou etanol
//distancia em metros
//16km/L gasolina
//11km/L etanol 


/*


function combust(distancia, tipo) {

    if(!Number. isInteger(distancia) || distancia < 0){
        //console.log("A distância deve ser um número inteiro não negativo")
        throw new Error("A distância deve ser um número inteiro não negativo")
    }

    if(tipo !== "gasolina" && tipo !== "etanol"){
        //console.log('O tipo de combustível deve ser "gasolina" ou "etanol".')
        throw new Error('O tipo de combustível deve ser "gasolina" ou "etanol".');
    }

    let litrosNecessarios;
    if (tipo === "gasolina") {
        litrosNecessarios = distancia / 16000 // = litro de gasolina usados 
    } else if (tipo === "etanol") {
        litrosNecessarios = distancia / 11000 // litro de etanol usado
    }

    litrosNecessarios = Math.ceil(litrosNecessarios);

    return litrosNecessarios;
}


module.exports = {combust}

*/

function calcularGastoCombustivel(distancia, tipoCombustivel) {
    if (!Number.isInteger(distancia) || distancia < 0) {
        throw new Error("A distância deve ser um número inteiro não negativo");
    }

    if (tipoCombustivel !== "gasolina" && tipoCombustivel !== "etanol") {
        throw new Error('O tipo de combustível deve ser "gasolina" ou "etanol".');
    }

    const eficiencia = tipoCombustivel === "gasolina" ? 16000 : 11000; // Correção aqui
    const litrosNecessarios = distancia / eficiencia;
    return Math.ceil(litrosNecessarios);
}

module.exports = calcularGastoCombustivel;