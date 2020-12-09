import Head from "next/head"
import Link from 'next/link'
import Contador from '../components/Contador'
import Resposta from '../components/Resposta'

function Home(){
    
    const d = {
        "paddingLeft":"10px",
        "display":"grid",
        "gridTemplateColumns": "repeat(5, 1fr)",
        "rowGap": "30px",
        "columnGap": "10px",
        "alignItems": "center"
    }
    const body = {
        "width": "98vw",
        "height": "96vh",
        "backgroundImage": "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1 100%)",
    }
    function reset(){
        document.querySelectorAll("#round").forEach(function(element){
            element.display = "none";
      })
    }

    return (
    <div style={body}>
        <Head>
            <title>Qual é a pergunta?</title>
            <link rel="shortcut icon" type="image/png" href="https://github.com/Gabrielbzl001/ghostk/blob/master/favicon.png?raw=true"/>
        </Head>
        <h1>Qual é a pergunta?</h1>
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
        <Resposta/>
        </div>
    </div>

    )
}


export default Home