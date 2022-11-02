const FuncionPares = (callback) => {
    console.log("La suma de los numeros pares es: "+callback);
}

const FuncionImpares = (callback) => {
    console.log("La suma de los numeros impares es: "+callback);
}

const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = valores.filter(valorespares => valorespares%2 == 0);
const impares = valores.filter(valoresimpares => valoresimpares%2 != 0);

const SumaPares = pares.reduce((v1, v2) => {
    return v1+v2;
})

const SumaImpares = impares.reduce((v1, v2) => {
    return v1+v2;
})

FuncionPares(SumaPares);
FuncionImpares(SumaImpares);