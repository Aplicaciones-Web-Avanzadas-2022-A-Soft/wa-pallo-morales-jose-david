export const MONEDAS: MonedasInterface[]=[
    {
        id:'USD', nombre: 'Dolar Estados Unidos'
    },
    {
        id:'MXN', nombre: 'Peso Mexicano'
    },
    {
        id:'EUR', nombre: 'Euro'
    },
    {
        id:'GBP', nombre: 'Libra Esterlina'
    }

]
export interface MonedasInterface{
    id: string;
    nombre: string;
}