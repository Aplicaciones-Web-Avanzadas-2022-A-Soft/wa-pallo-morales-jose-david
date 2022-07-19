
const fs = require('fs');
const inquirer = require('inquirer');
const path = './Datos.txt';
let arregloDatos = []

function leerArchivo(path){
    return new Promise(
        (
            resolve,
            reject
        ) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if(error){
                        reject('Error leyendo archivo.');
                    }else{
                        resolve(contenido);
                    }
                }
            );
        }
    )
}

function escribirArchivo(path, contenido){
    return new Promise(
        (
            resolve,
            reject
        ) => {
            fs.writeFile(
                path,
                contenido,
                (errorEscritura)=>{
                    if(errorEscritura){
                        reject('Error escribiendo archivo.');
                    }else{
                        resolve('Archivo escrito.');
                    }
                }
            );
        }
    )
}

async function guardarDatos(){
    try{
        await escribirArchivo(path, JSON.stringify(arregloDatos));
    }catch (e) {
        console.log('Error en la escritura de los datos.', e);
    }
}

async function extraerDatos(){
    let contenido = undefined;
    try{
        contenido = await leerArchivo(path);
        if(contenido !== undefined){
            arregloDatos = JSON.parse(contenido);
        }else{
            arregloDatos = [];
        }
    }catch(e){
        console.log('Error en la lectura de los datos', e);
    }
}

async function recibirId(nombreEntidad){
    try{
        const respuesta = await inquirer.prompt(
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese el id del'+ nombreEntidad +'que quiere actualizar o eliminar: '
            }
        )
        return respuesta.id;
    }catch (e) {
        console.log('No se pudo recibir el id', e);
    }
}



async function crearArtista(){
    try{
        await leerArtista();
        const respuestas = await inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingresa el id del artista:'
            },
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingresa el nombre del artista:'
            },
            {
                type: 'input',
                name: 'apellido',
                message: 'Ingresa el apellido del artista:'
            },
            {
                type: 'input',
                name: 'direccion',
                message: 'Ingresa la dirección del artista:'
            },
            {
                type: 'input',
                name: 'fechaNacimiento',
                message: 'Ingresa la fecha de nacimiento del artista:'
            }

        ])
        const indice = arregloDatos.findIndex(
            elemento => elemento.id === respuestas.id
        )
        if(indice !== -1){
            console.log('\n\nYa existe un artista con ese identificador.\n')
        }else{
            respuestas.partituras = [];
            respuestas.tipo = 'Artista';
            arregloDatos.push(respuestas);
            console.log('\n\nArtista creado con éxito.\n')
            await leerArtista();
        }
    }catch (e) {
        console.log('\n\nError al crear un Artista.', e);
    }
}

const leerArtista = () => {
    const arregloArtista = arregloDatos
        .filter(
            (valorActual, indiceActual, arregloCompleto)=>{
                return valorActual.tipo === 'Artista';
            }
        );
    if(arregloArtista.length !== 0){
        console.log('\n\n\t\tListado de Artistas');
        const arregloFinal = arregloArtista
            .map(
                (valorActual, indiceActual, arregloCompleto) => {
                    return {
                        id: valorActual.id,
                        nombre: valorActual.nombre,
                        apellido: valorActual.apellido,
                        direccion: valorActual.direccion,
                        fechaNacimiento: valorActual.fechaNacimiento,
                        artistas: JSON.stringify(valorActual.artistas),
                        tipo: valorActual.tipo,
                    };
                }
            );
        console.log(arregloFinal);
    }else{
        console.log('\n\nNo existen artistas.\n');
    }
}

async function actualizarArtista(){
    await leerArtista();
    let idArtista = await recibirId(' artista ');
    const indice = arregloDatos.findIndex(
        elemento => elemento.id === idArtista
    )
    if(indice !== -1){
        try{
            const respuestas = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingresa el nombre del artista:'
                },
                {
                    type: 'input',
                    name: 'apellido',
                    message: 'Ingresa el apellido del artista:'
                },
                {
                    type: 'input',
                    name: 'direccion',
                    message: 'Ingresa la dirección del artista:'
                },
                {
                    type: 'input',
                    name: 'fechaNacimiento',
                    message: 'Ingresa la fecha de nacimiento del artista:'
                },

            ])
            arregloDatos[indice].nombre = respuestas.nombre;
            arregloDatos[indice].apellido = respuestas.apellido;
            arregloDatos[indice].direccion = respuestas.direccion;
            arregloDatos[indice].fechaNacimiento = respuestas.fechaNacimiento;
            console.log('\n\nArtista actualizado con éxito.\n')
            await leerArtista();
        }catch (e) {
            console.log('\n\nNo se pudo actualizar al artista.',e)
        }
    }else{
        console.log('\n\nNo existe un artista con ese identificador.\n')
    }
}

async function borrarArtista(){
    await leerArtista();
    let idArtista = await recibirId(' artista ');
    const indice = arregloDatos.findIndex(
        elemento => elemento.id === idArtista
    )
    if(indice !== -1){
        try{
            const respuesta = await inquirer.prompt(
                {
                    type: "confirm",
                    name: "confirmacion",
                    message: "¿Seguro desea eliminar el artista?"
                }
            )
            if(respuesta.confirmacion){
                arregloDatos.splice(indice, 1);
                console.log('\n\nArtista eliminado con éxito.\n');
                await leerArtista();
            }else{
                console.log('\n\nSe canceló la eliminación del artista.\n');
            }
        }catch (e) {
            console.log('\n\nNo se pudo eliminar el artista.',e)
        }
    }else{
        console.log('\n\nNo existe un artista con ese identificador.\n')
    }
}


async function crearPartitura(){
    try{
        await leerArtista();
        const respuestas = await inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingresa el id de la partitura:'
            },
            {
                type: 'input',
                name: 'tipo',
                message: 'Ingresa el tipo de partitura:'
            },
            {
                type: 'input',
                name: 'clave',
                message: 'Ingresa la clave de la partitura:'
            },
            {
                type: 'input',
                name: 'claveMusical',
                message: 'Ingresa la clave musical:'
            },
            {
                type: 'input',
                name: 'marcaTiempo',
                message: 'Ingresa la marca de tiempo:'
            },
            {
                type: 'number',
                name: 'idArtista',
                message: 'Ingresa el id del Artista:'
            },
        ])
        const indice = arregloDatos.findIndex(
            elemento => elemento.id === respuestas.id
        )
        if(indice !== -1){
            console.log('\n\nYa existe una partitura con ese identificador.\n')
        }else{
            respuestas.tipo = 'Partitura';
            let objeto = {idPartitura: respuestas.id,tipo: respuestas.tipo, clave: respuestas.clave}
            if(arregloDatos[respuestas.idArtista-1].partitura === undefined){
                arregloDatos[respuestas.idArtista-1].partitura.push(objeto);
            }else{
                arregloDatos[respuestas.idArtista-1].partitura.push(objeto);
            }
            arregloDatos.push(respuestas);
            console.log('\n\nPartitura creado con éxito.\n')
            await leerPartitura();
        }
    }catch (e) {
        console.log('\n\nError al crear una Partitura.', e);
    }
}

const leerPartitura = () => {
    const arregloPartituras = arregloDatos
        .filter(
            (valorActual, indiceActual, arregloCompleto)=>{
                return valorActual.tipo === 'Partitura';
            }
        );
    if(arregloPartituras.length !== 0){
        console.log('\n\n\t\tListado de partitura');
        console.log(arregloPartituras);
    }else{
        console.log('\n\nNo existen partituras.\n');
    }
}

async function actualizarPartitura(){
    await leerPartitura();
    let idPartitura = await recibirId(' partitura ');
    const indice = arregloDatos.findIndex(
        elemento => elemento.id === idPartitura
    )
    if(indice !== -1){
        try{
            const respuestas = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: 'Ingresa el id de la partitura:'
                },
                {
                    type: 'input',
                    name: 'tipo',
                    message: 'Ingresa el tipo de partitura:'
                },
                {
                    type: 'input',
                    name: 'clave',
                    message: 'Ingresa la clave de la partitura:'
                },
                {
                    type: 'input',
                    name: 'claveMusical',
                    message: 'Ingresa la clave musical:'
                },
                {
                    type: 'input',
                    name: 'marcaTiempo',
                    message: 'Ingresa la marca de tiempo:'
                }
            ])
            arregloDatos[indice].tipo = respuestas.tipo;
            arregloDatos[indice].clave = respuestas.clave;
            arregloDatos[indice].claveMusical = respuestas.claveMusical;
            arregloDatos[indice].marcaTiempo = respuestas.marcaTiempo;

            console.log('\n\nPartitura actualizado con éxito.\n')
            await leerPartitura();
        }catch (e) {
            console.log('\n\nNo se pudo actualizar la partitura.',e)
        }
    }else{
        console.log('\n\nNo existe un artista con ese identificador.\n')
    }
}

async function borrarPartitura(){
    await leerPartitura();
    let idPartitura = await recibirId(' partitura ');
    const indice = arregloDatos.findIndex(
        elemento => elemento.id === idPartitura
    )
    if(indice !== -1){
        try{
            const respuesta = await inquirer.prompt(
                {
                    type: "confirm",
                    name: "confirmacion",
                    message: "¿Seguro desea eliminar la partitura?"
                }
            )
            if(respuesta.confirmacion){
                let idArtista = arregloDatos[indice].idArtista;
                arregloDatos.splice(indice, 1);
                const indiceArreglo = arregloDatos[idArtista-1].partituras.findIndex(
                    elemento => elemento.id === idPartitura
                );
                arregloDatos[idArtista-1].artistas.splice(indiceArreglo, 1);
                console.log('\n\nArtista eliminado con éxito.\n');
                await leerPartitura();
            }else{
                console.log('\n\nSe canceló la eliminación de la partitura.\n');
            }
        }catch (e) {
            console.log('\n\nNo se pudo eliminar la partitura.',e)
        }
    }else{
        console.log('\n\nNo existe una partitura con ese identificador.\n')
    }
}

async function menu(){
    await extraerDatos();
    let opcion = -1;
    while(opcion !== 0){
        console.log(
            '\t\tMenu Principal\n'
            +'\n0. Salir.'
            +'\n1. Crear Artista.'
            +'\n2. Listar artistas.'
            +'\n3. Actualizar artistas.'
            +'\n4. Borrar artistas.'
            +'\n5. Crear partitura.'
            +'\n6. Listar  partitura.'
            +'\n7. Actualizar partitura.'
            +'\n8. Borrar partitura.');
        try{
            const respuesta = await inquirer.prompt(
                {
                    type: 'number',
                    name: 'opcion',
                    messaje: 'Escoja una opción: '
                }
            )
            opcion = respuesta.opcion;
            switch (opcion) {
                case 0:
                    await guardarDatos();
                    return;
                case 1:
                    await crearArtista();
                    break;
                case 2:
                    leerArtista();
                    break;
                case 3:
                    await actualizarArtista();
                    break;
                case 4:
                    await borrarArtista();
                    break;
                case 5:
                    await crearPartitura();
                    break;
                case 6:
                    leerPartitura();
                    break;
                case 7:
                    await actualizarPartitura();
                    break;
                case 8:
                    await borrarPartitura();
                    break;
                default:
                    console.log('No es una orden del menú.')
                    break;
            }
        }catch (e) {
            console.log('No se puede acceder al menú.', e);
        }
    }
}

menu();