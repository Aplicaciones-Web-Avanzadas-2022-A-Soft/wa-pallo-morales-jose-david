// 01-variables.ts
// npm install - g typescript
var nombre = 'Jose'; //primitivo
var nombre2 = 'Jose2'; //Close String
// nombre = 1
nombre = 'David';
var edad = 32;
var casado = false;
var fecha = new Date();
var sueldo;
sueldo = 12.4;
// Duck Typing
var apellido = 'Pallo'; // String ->
apellido = 'Morales'; // igual a otros string
apellido.toUpperCase(); // metodos String
// apellido = 1 // Error, no es un string
var marihuana = 2;
marihuana = '2';
marihuana = true;
marihuana = function () { return '2'; };
var edadMultiple = '2';
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos';
edadMultiple = new Date();
// edadMultiple = true // error porque no esta definido en todos los tipos de variables que puede tomar
