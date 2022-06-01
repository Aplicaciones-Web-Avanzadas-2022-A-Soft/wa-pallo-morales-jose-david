// 03-funciones.ts
function sumarNumeros(
    numeroInicial: number,
    ...numerosInfinitos: number[]
): number{
    return numeroInicial;
}

function imprimir(mensaje: string){
    console.log('Hola' + mensaje)
}
const arregloNumeros: number[] = [1,2];
const arregloNumeroDos: Array<number> = [1,2];
const arregloNumeroTres: (number | string | boolean) [] = [1, 'dos', true];
const arregloNumeroCuatro: Array<number | string | boolean>  = [1, 'dos', true];
let arregloNumeroCinco: number[] | string[] = [1,2];
arregloNumeroCinco = ['uno', 'dos'];