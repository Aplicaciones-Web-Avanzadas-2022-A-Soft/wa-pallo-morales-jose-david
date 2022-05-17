/*
//01-javascript/

//MutableseInmutables



//Mutables

varnumeroUno=1;

letnumeroDos=2;//Siempreusartipolet

numeroUno=5;

numeroDos=8;

numeroUno=false;

numeroDos=true;



//Inmutables

constconfiguracionArchivo="XML";

//configuracionArchivo="XML";

//VamosapreferirCONST>LET>NUNCAVAR!



//TiposdeVariables

constnumero=1;//number

constsueldo=1.2;//number

consttexto="Christian";//string

constapellido='Morán';//string

constbooleano=false;//boolean

consthijos=null;//object

constzapatos=undefined;//undefined



console.log(typeof numero);

console.log(typeof sueldo);

console.log(typeof texto);

console.log(typeof apellido);

console.log(typeof booleano);

console.log(typeof hijos);

console.log(typeof zapatos);

console.log(typeof Number("asd"));//number

console.log(Number("asd"));//NaN



//TrutyFalsy

if(true===true){

    console.log("Esverdadero");

}else{

    console.log("Esfalso");

}



if(true===true){

    console.log("Esverdadero");

}else{

    console.log("Esfalso");

}



if(""){

    console.log("Stringvacíoesverdadero");

}else{

    console.log("Stringvacíoesfalsy");

}



if("Chris"){

    console.log("Stringcondatosestruty");

}else{

    console.log("Stringcondatosesfalsy");

}



if(-1){

    console.log("Negativoestruty");

}else{

    console.log("Negativoesfalsy");

}



if(0){

    console.log("Ceroestruty");

}else{

    console.log("Ceroesfalsy");

}



if(1){

    console.log("Positivoestruty");

}else{

    console.log("Positivoesfalsy");

}



//Ordendeimportancia

//1)const

//2)let

//3)X->"var"

//ObjetosJs(JSON)

const chris={

    "nombre":"Christian",//llave:valor,

    apellido:"Morán",

    edad:24,

    hijos:null,

    zapatos:undefined,

    casado:false,

    ropa:{

        color:'plomo',

        talla:'S',

    },

    mascotas:["Lua","Nat"],

};



console.log(chris);



//Accederalaspropiedadesdelobjeto

chris.nombre;

chris.apellido;

chris["nombre"];

//Cambiarvalores

chris.nombre="Alejandro";

console.log(chris);

chris["nombre"]="Christian";

//Crearnuevosatributosométodosdentrodelobjeto

chris.sueldo;//undefined

console.log(chris.sueldo);

chris.sueldo=1.2;

console.log(chris.sueldo);

chris["gastos"]=0.8;

console.log(chris.gastos);

console.log(chris.sueldo);

//Borrarelvalordeunapropiedad

chris.nombre=undefined;

console.log(chris);

console.log(Object.keys(chris));

console.log(Object.values(chris));

//Deletelallaveyelvalordentrodelobjeto

delete chris.nombre;//Eliminarlallave"nombre"

console.log(chris);



//Variablesporvalororeferencia?

//VariablesporvalorenJSsonlasprimitivas:number,string,boolean

let edadChris=24;

let edadAlex=edadChris;//Guardamosunaprimitivaenotravariable

//Variablesporvalor

console.log(edadChris);//24

console.log(edadAlex);//24

edadAlex+=1;

console.log(edadChris);//24

console.log(edadAlex);//25

*/

//Variables por referencia

let notas = {
    total: 10
}
let notasSegundoBimestre = notas;
notasSegundoBimestre.total = notasSegundoBimestre.total + 1;
console.log(notas);
console.log(notasSegundoBimestre);
notas.total =  notas.total + 1;
console.log(notas);
console.log(notasSegundoBimestre);

//Como clonar objetos
let notasTercerBimestre = Object.assign({}, notas);
//Object.assign([], arreglo)
notasTercerBimestre.total = notasTercerBimestre.total + 1 ;
console.log(notas);
console.log(notasSegundoBimestre);
console.log(notasTercerBimestre);