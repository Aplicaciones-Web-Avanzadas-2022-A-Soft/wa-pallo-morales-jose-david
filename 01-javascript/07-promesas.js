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

function promesaElevarAlCuadrado(numero){
    const miPrimerPromesa =  new Promise(
        (resolve, reject)=>{
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado);
        }
    )
    return miPrimerPromesa
}

promesaEsPar(2)
    .then(
        (numeroPar)=>{
            return promesaElevarAlCuadrado(numeroPar)
        }
    )
    .then(
        (numeroParElevadoAlCuadrado)=>{
            console.log('numeroParElevadoAlCuadrado', numeroParElevadoAlCuadrado)
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


