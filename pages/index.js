import Link from 'next/link';
import Head from "next/head"
import {useState} from 'react';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

function Contador(props){
    const [cor, setCor] = useState("none");

    function mudaCor(){
        if(cor == "block") setCor("none");
        else setCor("block");
    }
    const style = {
        "display": cor,
        "font": "25px sans-serif, Arial"
    }
    const buttonStyle = {
        "font": "sans-serif",
        "outline":"none",
        "border":"none",
        "background-color":props.color,
        "text-decoration":"none",
        "justify-content":"center",
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
        "padding-left":"10px",
        "display":"grid",
        "grid-template-columns": "repeat(5, 1fr)",
        "row-gap": "30px"
    }
    return (
    <div>
        <Head>
            <title>Home</title>
            <link rel="shortcut icon" type="image/png" href="https://github.com/Gabrielbzl001/ghostk/blob/master/favicon.png?raw=true"/>
        </Head>
        <h1>Home</h1>
        <div style={d}>
        <Contador color="red">pi</Contador>
        <Contador color="blue">Pedro Álvares Cabral</Contador>
        <Contador color="green">1990</Contador>
        <Contador color="yellow">hidrogênio</Contador>
        <Contador color="pink">Pitágoras</Contador>
        <Contador color="pink">Pitágoras</Contador>
        <Contador color="pink">Pitágoras</Contador>
        <Contador color="pink">Pitágoras</Contador>
        </div>
        <Link href="/sobre">
            <a>Respostas</a>
        </Link>
    </div>

    )
}


export default Home