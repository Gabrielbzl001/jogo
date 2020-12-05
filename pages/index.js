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
        "width": "98vw",
        "height": "96vh",
        "backgroundImage": "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
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
            <button>Gabarito</button>
        </Link>
    </div>

    )
}


export default Home