import Layout from "../components/Layout";
import io from "socket.io-client"
import {useEffect, useState} from "react"
const servidorWebsocket = 'http://localhost:8080'
const socket = io(servidorWebsocket)

export default function WebSocket(){
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [mensajes, setMensajes] = useState([] as {mensaje:string}[]);

    useEffect(
        ()=>{
            socket.on('connect', ()=>{
                setIsConnected(true);
                console.log('Si está conectado');
            });
            socket.on('disconnect', ()=>{
                setIsConnected(false);
                console.log('No está conectado');
            });
            socket.on('escucharEventoHol', (data:{mensaje: string})=>{
                const nuevoMensaje = {
                    mensaje: data.mensaje
                };
                setMensajes((mensajesAnteriores)=>[...mensajesAnteriores, nuevoMensaje]);
            });
        },
        []
    )

    return(
        <>
            <Layout title="WebSocket">
                <h1>Websockets</h1>
                <ul>
                    {mensajes.map((mensaje, indice)=><li key={indice}>{mensaje.mensaje}</li>)}
                </ul>
            </Layout>
        </>
    )
}