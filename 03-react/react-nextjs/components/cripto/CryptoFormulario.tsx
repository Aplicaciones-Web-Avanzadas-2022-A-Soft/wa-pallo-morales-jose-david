import {MONEDAS, MonedasInterface} from "../constantes/monedas"
import useSelectMoneda from "../hooks/useSelectMoneda";
import {useEffect, useState} from "react";

export const CryptoFormulario = ({setMonedas})=>{
    const [monedasArreglo, setMonedasArreglo] = useState(
        //Monedas.map((a))=>a)
        //Object.assing([], MONEDAS)
        [...MONEDAS]
    )
    const [criptomonedasArreglo, setCriptoMonedasArreglo] = useState([]);
    //Definir Select
    const [ valorMoneda, SelectMonedasComponente ] = useSelectMoneda('Seleccionar Moneda', MONEDAS);
    const [ valorCriptoMoneda, SelectCriptoMonedaComponet] = useSelectMoneda('Seleccionar Criptomoneda' , criptomonedasArreglo);

    //Ayuda a reaccionar a cambios alguna variable escuchar cambios
    //Inicializar variables dentro del componente
    useEffect(
        ()=>{
            //Eventos cuado cambie de variable
            console.log('Inicializando...');
            //setCriptoMonedasArreglo([{id: 'Bitcoin', mombre:'Bircoin'}])
            const consultarAPI = async ()=>{
                const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
                const respuesta = await fetch(url);
                const dataPlana = await respuesta.json();
                const arregloCripto =  dataPlana.Data.map(
                    (criptoMoneda) => {
                        const criptoMonedaLocal:MonedasInterface = {
                            id: criptoMoneda.CoinInfo.Name,
                            nombre: criptoMoneda.CoinInfo.FullName
                        };
                        return criptoMonedaLocal
                    }
                );
                setCriptoMonedasArreglo(arregloCripto);
            }
            consultarAPI();
        },
        [
            //
        ]
    )

    useEffect(
        ()=>{
            console.log('Cambio Moneda', valorMoneda);
        },
        [valorMoneda]//Escucho cambios de valorMoneda
    )

    useEffect(
        ()=>{
            console.log('Cambio Criptomoneda', valorCriptoMoneda);
        },
        [valorCriptoMoneda] //Escucho cambios de valorCriptoMoneda
    )
    useEffect(
        ()=>{
            console.log('Cambio Moneda o Criptomoneda', valorMoneda, valorCriptoMoneda);
        },
        [valorMoneda, valorCriptoMoneda] //Escucho cambios de valorMoneda o valorCriptoMoneda
    )

    const[error,setError] = useState(false);

    const manejarSubmitFormulario = (e)=>{
        e.preventDefault()
        if ([valorMoneda, valorCriptoMoneda].includes('')){
            setError(true);
        }
        setError(false)
        // enviar criptomonedas a nuestra ruta
        setMonedas({
            valorMoneda,
            valorCriptoMoneda
        })
    }
    return (
        <>
            <form onSubmit={manejarSubmitFormulario}>
                <SelectMonedasComponente/>
                <SelectCriptoMonedaComponet/>
                <br/>
                <button className={'btn btn-primary w-100'} type="submit">Consultar</button>
            </form>
        </>
    )
}
export default CryptoFormulario
