const inquirer = require('inquirer');
async function main(){
    try{
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'apellido',
                    message:'Ingresa tu nombre'
                },
                {
                    type: 'input',
                    name: 'edad',
                    message: 'Ingresa tu edad'
                }
            ]);
        console.log('Respuesta', respuesta);
    }catch (e) {
        console.error(e);
    }
}
main();

//Stringify y Parse
const arregloUsuarios=[
    {
        id: 1,
        nombre: 'Jose'
    }
];

const arregloGuardado = JSON.stringify(arregloUsuarios); //Arreglos, Objetos
console.log('arregloGuradado', arregloGuardado);
const arregloRestaurado = JSON.parse(arregloGuardado);
console.log('arregloRestaurado', arregloRestaurado)