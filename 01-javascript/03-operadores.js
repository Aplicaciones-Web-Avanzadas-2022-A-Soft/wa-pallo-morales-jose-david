const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//FUNCIONES CON PARAMETROS
//FIND
//enviamos una expresion -> TRUTY FALSY
//devuelve el pimero que cumpla con esa condición

const respuestaFind = arreglo
.find(
  function (valorActual, indiceActual, arregloCompleto){
      console.log('valorActual', valorActual);
      console.log('indiceActual', indiceActual);
      console.log('arregloCompleto', arregloCompleto);
      return valorActual.nombre === 'Cristian'; //EXPRESIÓN = = =
  }
);
console.log('respuestaFind', respuestaFind); //Cristian // si no encuentro devuelve undefined

//FINDINDEX
// enviamos una expresion ->TRUTY FALSE
// devuelve el primero que cumpla esa condición
const respuestaIndex = arreglo
.findIndex(
  function (valorActual){
      return valorActual.nombre === 'Cristian';
  }
);

console.log('respuestaIndex', respuestaIndex);