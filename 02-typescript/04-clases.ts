// 04-clases.ts
class Persona{
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'humano';
    protected nombreYApellido = ''; //Duck Typing -> string
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombreParametro + ' ' + apellidoParametro;
    }

    private mostrarNombreYApellido(): string{
        return this.nombreYApellido;
    }
}

class Usuario extends Persona{
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string,
        public estadoCivil: string,
    ) {
        super(nombreParametro, apellidoParametro);
    }
}
const jose = new Usuario(
    'Jose',
    'Pallo',
    '142586358652',
    'soltero'
);
jose.nombre;
jose.apellido;
jose.cedula;
jose.estadoCivil;