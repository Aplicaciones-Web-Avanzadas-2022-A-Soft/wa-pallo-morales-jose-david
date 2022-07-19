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

// FOR EACH
// intera el arreglo

const respuestaForEach =  arreglo
    .forEach(
      function (valorActual, indiceActual, arregloCompleto) {
          console.log('valorActual', valorActual);
      }
    );
console.log('respuestaForEach', respuestaForEach); //Undefined


//MAP (Modificar o MUTAR  el arreglo y devuelve un nuevo arreglo)
//emviamos los datos del nuevo arreglo

const respuestaMap =  arreglo
    .map(
      (valorActual, indiceInicial, arregloCompleto)=>{
          const nuevoElemento = {
              id: valorActual.id,
              nombre: valorActual.nombre,
              nota: valorActual.nota,
              casado: false
          };
          return nuevoElemento;
      }
    );
console.log('respuestaMap', respuestaMap);
console.log('arreglo', arreglo);

// FILTER (filtrar el arreglo)
// envimos EXPRESION TRUTY FALSY
// devuelve los elementos que cumplen esa condición

const respuestaFilter = arreglo
.filter(
    (valorActual, indiceActual, ArregloCompleto)=>{
        return valorActual.nota >= 12;
    }
);
console.log('respuestaFilter', respuestaFilter);
console.log('arreglo', arreglo);

// SOME -> expresion
// DEVUELVE BOOLEANO
// Hay ALGUNA nota menor a nueve? SI NO
// OR

const respuestaSome =  arreglo
    .some(
        function (valorActual, indiceActual, rregloCompleto){
            return valorActual.nota < 9;
        }
    );

console.log('respuestaSome', respuestaSome);


// EVERY -> expresion
// DEVUELVE BOOLEANO
// Todas las notas son mayores a 14? SI NO
// AND

const respuestaEvery = arreglo
    .every(
        function (valorActual, indiceActual, arregloCompleto){
            return valorActual.nota > 14;
        }
    );

console.log('respuestaEvery', respuestaEvery);

// REDUCE           izq -> der
// REDUCE RIGHT     der -> izq
// 100 <3 puntos de vida
// 100 -1 -2 -3 -4 -5 -5 -6 -7 =
// 0 1 +2 +3 +6 +4 +8 +9 =
// [1,2,3,4,5,6,7,8,9]

const respuestaReduce =  arreglo
    .reduce(
        function (valorAcumulado,valorActual, indice, arreglo ){
            return (valorAcumulado + valorActual.nota);
        },
        0 //Acumulador
    );
console.log('respuuestaReduce', respuestaReduce);