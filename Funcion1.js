const Funcion1 = (callback) => {
    console.log("La resta es: "+callback);
}

const valores = [128, 64, 32, 16, 8, 1500];
valores.pop(); //Elimina el ultimo valor del arreglo
const Resta = valores.reduce((v1, v2) => {
    return v1-v2;
})

Funcion1(Resta);