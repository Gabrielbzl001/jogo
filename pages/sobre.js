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
        "width" : "400px",
        "height": "300px",
    }

    return(
        <div>
            <button style={buttonStyle} id={props.id} onClick={mudaCor}><div style={style}>{props.children}</div></button>
        </div>
    )
}

function Sobre(props){
    const body = {
        "backgroundImage": "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
    }
    const d = {
        "paddingLeft":"10px",
        "display":"grid",
        "gridTemplateColumns": "repeat(3, 1fr)",
        "rowGap": "30px",
        "columnGap": "10px",
        "alignItems": "center"
    }

    return (
        
    <body style={body}>
        <Head>
            <link rel="icon" href="https://github.com/Gabrielbzl001/ghostk/blob/master/favicon.png?raw=true"/>
            <title>Perguntas</title>
        </Head>
        <h1>Gabarito</h1>
        <div style={d}>
        <Pergunta color="red">Qual o nome do processo permanente e constante de aperfeiçoamento dos saberes necessários à atividade dos educadores e é realizada após a formação inicial com objetivo de assegurar um ensino de qualidade cada vez maior aos alunos?</Pergunta>
        <Pergunta color="blue">Na escola pública, as coordenações pedagógicas constituem espaços privilegiados de formação continuada, planejamento e organização do trabalho pedagógico?</Pergunta>
        <Pergunta color="green">No Brasil, em que ano começou a dar destaque e enfoque nas práticas pedagógicas pelo docente?</Pergunta>
        <Pergunta color="yellow">Qual tendência reﬂexiva o texto apresenta como um novo paradigma na formação de professores?</Pergunta>
        <Pergunta color="brown">Fale algumas características do conhecimento proﬁssional para Tardif (1999):</Pergunta>
        <Pergunta color="orange">São categorias identiﬁcadas por Gauthier e seus colaboradores relacionadas às proﬁssões:</Pergunta>
        <Pergunta color="purple">Ofícios sem saberes:</Pergunta>
        <Pergunta color="pink">Saberes sem ofício?</Pergunta>
        <Pergunta color="#78C9FB">O que é o ofício feito de saberes?</Pergunta>
        <Pergunta color="#13FE00">Pimenta (1999) em uma pesquisa identiﬁca três tipos de saberes da docência, quais são eles?</Pergunta>
        
        
        
        </div>
        <Link href="/">
            <a>Retornar para as perguntas</a>
        </Link>
    </body>

    )
}


export default Sobre