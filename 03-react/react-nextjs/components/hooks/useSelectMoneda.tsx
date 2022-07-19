import {useState} from "react";
import {MonedasInterface} from "../constantes/monedas";

const useSelectMoneda = (label: string, opciones: MonedasInterface[])=>{
    // Usamos Hooks React (useState)
    // const [state, setState] = useState('VALOR')
    //const [valorEjemplo, setValorEjemplo] = useState('Jose') //Hook
    const [valorMoneda, setValorMoneda] = useState('');
    const generarSelectMonedas = ()=>{
        return opciones.map((moneda)=>
            (
                <option key={moneda.id} id={moneda.id} value={moneda.id}>{moneda.nombre}</option>
            )
        )
    }

    const SelectMonedas = ()=>(
        <>
            <label className='form-label' htmlFor={label}>{label}</label>
            <select className='form-select'
                    name={label}
                    id={label}
                    value={valorMoneda}
                    onChange={e => setValorMoneda(e.target.value)}
            >
                <option value="">Seleccione opción</option>
                {generarSelectMonedas()}
            </select>
        </>
    )
    return [valorMoneda, SelectMonedas]
}
export default useSelectMoneda