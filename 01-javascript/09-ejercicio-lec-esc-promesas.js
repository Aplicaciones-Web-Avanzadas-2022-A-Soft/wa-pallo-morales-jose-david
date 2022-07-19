// 09-ejercicio-lec-esc-promesas.js

const fs = require('fs');
/*
Hacer una funcion que me acepte como parametro una variable
con el path del primer archivo, el path del segundo archivo
y el path del nuevo archivo.
Vamos a crear dos funciona una promesaLectura y una promesaEscritura
promesaLectura va a aceptar path de lectura
promesaEscritura va a aceptar path nuevo archivo y el contenido
- Promesa de lectura
- Promesa de escritura
* */

function promersaLectura(path){
    return new Promise(
        (resolve, reject)=>{
            fs.readFile(
                path,
                'utf-8',
                (errorLectura, contenido)=>{
                    if (errorLectura){
                        reject(errorLectura)
                    }else{
                        resolve(contenido);
                    }
                }
            )
        }
    )
}
function promesaEscritura(path, contenidoArchivo){
return new Promise(
    (resolve, reject)=>{
        fs.writeFile(

        )
    }
)
}



const path = '';
leerArchivo(path)
    .then(
        (leerArchivoP)=>{
            return escribirArchivo(path, conte)
        }
    )
    .then(
        (escribirArchivo)=>{
            console.log('', numeroParElevadoAlCuadrado)
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



async function ejercutarPormesasAsyncAwait(pathUno, pathDos, pathTres){
    try {
        const primerContenido = await promersaLectura(pathUno);
        const segundoContenido = await promesaEscritura(pathDos);
        await promesaEscritura(pathTres, primerContenido + segundoContenido)
    }catch (error){
        console.error(error);
    }
}





