
const fs = require('fs');
// 06-ejemplo.txt -> hola
console.log('PRIMERO')
// 1) Leer el archivo: 06-ejemplo.txt, luego imprimir en consola
// 2) Después del paso 1, Leer el archivo: 01-variables.js, luego imprimir en consola
// 3) Crear un nuevo archivo llamdo 06-nuevo.archivo.js

fs.readFile(
    './06-ejemplo.txt', //1
    'utf-8',
    (error, contenido) => {
        console.log('contenido:',contenido);
        fs.readFile(
            './01-variables.js',
            'utf-8',
            (error,contenido) =>{
                console.log('contenido:',contenido);
            }
        );
    }
);
console.log('TERCERO');

// 3)

fs.readFile(
    './06-ejemplo.txt', // Nombre o path del archivo
    'utf-8', // codificacion
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
        if(errorLecturaPrimerArchivo){
            console.error(errorLecturaPrimerArchivo);
            throw new Error('Error leyendo primer archivo');
        }else{

            fs.readFile(
                './01-variables.js', // Nombre o path del archivo
                'utf-8', // codificacion
                (errorLecturaSegundoArchivo, contenidoSegundoArchivo) => {
                    if(errorLecturaSegundoArchivo){
                        console.error(errorLecturaSegundoArchivo);
                        throw new Error('Error leyendo primer archivo');
                    }else{
                        const nuevoContenido = contenidoPrimerArchivo + contenidoSegundoArchivo;
                        fs.writeFile(
                            './06-nuevo-archivo.txt',
                            nuevoContenido,
                            (errorEscritura)=>{
                                if(errorEscritura){
                                    console.error(errorEscritura);
                                    throw new Error('Error escribiendo nuevo archivo');
                                }else{
                                    console.log('Completado');
                                }
                            }
                        );
                    }
                }
            );
        }

    }
);

console.log('TERCERO');