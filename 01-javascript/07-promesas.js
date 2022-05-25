// 07-promesas.js
const fs = require('fs');
function promesaEsPar(numero){
    const miPrimeraPromesa = new Promise (
        (
            resolve, reject
        )=>{
            if (numero % 2 == 0){
                resolve(numero);
            }else {
                reject('No es Par=(');
            }
        }
    )
    return miPrimeraPromesa
}

promesaEsPar(2)
    .then(
        (respuesta)=>{
            console.log('Respuesta: ', respuesta);
        }
    )
    .catch(
        (error)=>{
            console.log('Error: ', error);
        }
    )
    .finally(
        ()=>{
            console.info('fin');
        }
    );