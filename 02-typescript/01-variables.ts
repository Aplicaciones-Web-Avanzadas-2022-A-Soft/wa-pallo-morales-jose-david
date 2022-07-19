// 01-variables.ts
// npm install - g typescript

let nombre: string = 'Jose'; //primitivo
let nombre2: string = 'Jose2'; //Close String
// nombre = 1
nombre = 'David'
let edad: number = 32;
let casado: boolean =  false;
let fecha: Date = new Date();
let sueldo: number;
sueldo =12.4;

// Duck Typing
let apellido = 'Pallo' // String ->
apellido = 'Morales'; // igual a otros string
apellido.toUpperCase(); // metodos String
// apellido = 1 // Error, no es un string

let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = ()=>'2';

let edadMultiple: number | string | Date='2';
edadMultiple = '2'
edadMultiple = 2222
edadMultiple = 'dos'
edadMultiple = new Date()
// edadMultiple = true // error porque no esta definido en todos los tipos de variables que puede tomar
