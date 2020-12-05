import Link from 'next/link';
import Head from "next/head"
import {useState} from 'react';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

function Contador(props){
    const [cor, setCor] = useState("none");

    function mudaCor(){
            setCor("block");
            setTimeout(() => {  setCor("none"); }, 5000);
    }
    const style = {
        "display": cor,
        "font": "25px sans-serif, Arial"
    }
    const buttonStyle = {
        "font": "sans-serif",
        "outline":"none",
        "border":"none",
        "backgroundColor":props.color,
        "textDecoration":"none",
        "justifyContent":"center",
        "width" : "300px",
        "height": "200px",
    }

    return(
        <div>
            <button style={buttonStyle} id={props.id} onClick={mudaCor}><div style={style}>{props.children}</div></button>
        </div>
    )
}

function Home(){
    const d = {
        "paddingLeft":"10px",
        "display":"grid",
        "gridTemplateColumns": "repeat(5, 1fr)",
        "rowGap": "30px"
    }
    const body = {
        
    }
    function reset(){
        document.querySelectorAll("#round").forEach(function(element){
            element.display = "none";
      })
    }
    return (
    <div style={body}>
        <Head>
            <title>Respostas</title>
            <link rel="shortcut icon" type="image/png" href="https://github.com/Gabrielbzl001/ghostk/blob/master/favicon.png?raw=true"/>
        </Head>
        <h1>Descubra as perguntas corretas</h1>
        <div id="round" style={d} onClick={reset}>
        <Contador color="red">pi</Contador>
        <Contador color="blue">Pedro Álvares Cabral</Contador>
        <Contador color="green">1990</Contador>
        <Contador color="yellow">hidrogênio</Contador>
        <Contador color="brown">Pitágoras</Contador>
        <Contador color="orange">Pitágoras</Contador>
        <Contador color="purple">Pitágoras</Contador>
        <Contador color="pink">Pitágoras</Contador>
        <Contador color="#78C9FB">Pitágoras</Contador>
        <Contador color="#13FE00">asdhsdaiuhsd</Contador>
        
        </div>
        <Link href="/sobre">
            <a>Respostas</a>
        </Link>
    </div>

    )
}


export default Home