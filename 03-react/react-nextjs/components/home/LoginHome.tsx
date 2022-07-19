import styles from "./login-home.module.css";
import styled from '@emotion/styled';

const Titulo = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  color: orange;
`
const SubTitulo = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  color: red;
`
interface LoginProperties{
    color: string;
    backgroundColor: string;
    propiedadesImagen:{
        width: number,
        height: number,
        urlImagen: string;
    };
}

type LoginPropertiesType = {
    propiedadesImagen:{
        width: number,
        height: number,
        urlImagen: string;

    };
}

const LoginHome = (props: LoginProperties) => {
    const misEstilos={
        color: props.color,
        backgroundColor: props.backgroundColor,
        borderBottom: '5px solid brown',
    }
    return (
        <>
            <Titulo>HOLA TITULO</Titulo>
            <SubTitulo>HOLA SUBTITULO</SubTitulo>

            <h1 style={misEstilos}>Login home</h1>
            <h1 className={styles.rojo}>ROJO</h1>
            <h1 className={styles.azul}>Azul</h1>

            <img src={props.propiedadesImagen.urlImagen}
                 width={props.propiedadesImagen.width}
                 height={props.propiedadesImagen.height}/>
        </>
    )
}

export default LoginHome