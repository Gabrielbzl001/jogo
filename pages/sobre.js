import Link from 'next/link';
import Head from "next/head"
import {useState} from 'react';


function Pergunta(props){
    const [cor, setCor] = useState("none");

    function mudaCor(){
            setCor("block");
            setTimeout(() => {  setCor("none"); }, 2000);
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
        "width" : "250px",
        "height": "150px",
    }

    return(
        <div>
            <button style={buttonStyle} id={props.id} onClick={mudaCor}><div style={style}>{props.children}</div></button>
        </div>
    )
}

function Sobre(props){
    const body = {
        "width": "98vw",
        "height": "96vh",
        "backgroundImage": "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
    }
    const d = {
        "paddingLeft":"10px",
        "display":"grid",
        "gridTemplateColumns": "repeat(5, 1fr)",
        "rowGap": "30px"
    }
    //const q = new URLSearchParams(urlObjectKeys).get("nome")
    //console.log(props)

    return (
        
    <div style={body}>
        <Head>
            <link rel="icon" href="https://github.com/Gabrielbzl001/ghostk/blob/master/favicon.png?raw=true"/>
            <title>Perguntas</title>
        </Head>
        <h1>Gabarito</h1>
        <div style={d}>
        <Pergunta color="red">Qual constante leva o valor 3,1415927?</Pergunta>
        <Pergunta color="blue">Quem descobriu o Brasil?</Pergunta>
        <Pergunta color="green">Em que ano a atriz Emma Watson nasceu?</Pergunta>
        <Pergunta color="yellow">Qual o elemento mais abundante da Terra?</Pergunta>
        <Pergunta color="brown">Quem ficou famoso pela divulgação da equação a² = b² + c²?</Pergunta>
        <Pergunta color="orange">Quem ficou famoso pela divulgação da equação a² = b² + c²?</Pergunta>
        <Pergunta color="purple">Quem ficou famoso pela divulgação da equação a² = b² + c²?</Pergunta>
        <Pergunta color="pink">Quem ficou famoso pela divulgação da equação a² = b² + c²?</Pergunta>
        <Pergunta color="#78C9FB">Quem ficou famoso pela divulgação da equação a² = b² + c²?</Pergunta>
        <Pergunta color="#13FE00">adasdasd?</Pergunta>
        
        
        
        </div>
        <Link href="/">
            <button>Retornar para as perguntas</button>
        </Link>
    </div>

    )
}


export default Sobre