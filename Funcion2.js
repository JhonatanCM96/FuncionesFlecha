const Funcion2 = (callback) => {
    console.log("El valor a pagar con el descuento del 10% es: "+callback*0.9);
}

const valores1 = [50000, 40000];
const valores2 = [20000, 60000];
const Total = valores1.reduce((v1, v2) => {
    return v1 + v2;
})

valores2.push(70000, 30000); //Agrega los valores al arreglo

const Total2 = valores2.reduce((v1, v2) => {
    return v1 + v2;
})

Funcion2(Total+Total2);