/*
const combust = require("./gasolina");

test("testando gasolina", () => {
    const distancia = 16000; // 1 km
    const tipo = 'gasolina';
    const result = combust(distancia, tipo);
    expect(result).toBe(1);
});
*/


const calcularGastoCombustivel = require("./gasolina");

test("Calcular gasto de combustível para gasolina", () => {
    const distancia = 16000; // 1 km
    const tipoCombustivel = "gasolina";
    const resultado = calcularGastoCombustivel(distancia, tipoCombustivel);
    expect(resultado).toBe(1);
});

test("Calcular gasto de combustível para etanol", () => {
    const distancia = 11000; // 1 km
    const tipoCombustivel = "etanol";
    const resultado = calcularGastoCombustivel(distancia, tipoCombustivel);
    expect(resultado).toBe(1);
});

test("Erro ao fornecer distância negativa", () => {
    const distancia = -1000; // Distância negativa
    const tipoCombustivel = "gasolina";
    expect(() => calcularGastoCombustivel(distancia, tipoCombustivel)).toThrow(
        "A distância deve ser um número inteiro não negativo"
    );
});

test("Erro ao fornecer tipo de combustível inválido", () => {
    const distancia = 10000;
    const tipoCombustivel = "diesel"; // Tipo de combustível inválido
    expect(() => calcularGastoCombustivel(distancia, tipoCombustivel)).toThrow(
        'O tipo de combustível deve ser "gasolina" ou "etanol".'
    );
});