// 04-funciones.js

function soloNumeros (a,b,c){
    return a - b + c; //Valor a devolver
}

// JS permite el uso de funciones sin validaciones
// soloNumeros('v', true, [1,2,3])
// soloNumeros ((a)=>a, (a)=>a, (a)=>A)
// soloNumeros(1,2,3,4,5,6,7)
// soloNumeros()

function soloLetras(a, b, c){ //Undefined
    console.log(a,b,c);
}


// Funciones nombradas - named fuctions
function funcionNombrada(){}

// Funciones anónimas - Anonymus fuctions
const funcionSinNombre1 =  function () {};
const funcionSinNombre2 =  function () {};
const funcionSinNombre3 =  function () {};

// Para ejecutar las funciones
[].forEach(function () {})
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();

// Funciones anónimas - Fot Arrow Functions
const funcionFatArrow1 = () => {};
var funcionFatArrow2 = () => {};
let funcionFatArrow3 = () => {};

[]. forEach(()=>{});
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();