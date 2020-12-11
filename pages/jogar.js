import Head from "next/head"
import Link from 'next/link'
import Pergunta from '../components/Pergunta'
import { connectToDatabase } from "../utils/dbConnect";
import {useState} from 'react'

function Jogar(props){

    async function handleClick(e){
        e.preventDefault()
        if(form.nome) await salva(form)
    }
    let form = {nome: '', p: {}, tema: props.tema}
    function handleChange(e){
        const {name, value} = e.target
        name != 'nome' ? form.p[name] = value : form[name] = value
    }
    const button = {
        "font": "22px sans-serif",
        "outline":"none",
        "border":"none",
        "backgroundColor": '#78C9FB',
        "textDecoration":"none",
        "justifyContent":"center",
        "width" : "250px",
        "height": "100px",
        "borderRadius": "50px",
        "margin": "30px",
        "marginLeft": "80px"
    }

    async function salva(form){
        await fetch('api/name', {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(form)
          })
          document.querySelector('#gabarito').disabled = false
          document.querySelector('#gabarito').preventDefault = true
    }
    const button = {
        "font": " 20px sans-serif",
        "outline":"none",
        "border":"none",
        "backgroundColor": '#78C9FB',
        "textDecoration":"none",
        "justifyContent":"center",
        "width" : "250px",
        "height": "100px",
        "borderRadius": "50px",
        "margin": "80px"
    }
    
    const d = {
        "paddingLeft":"10px",
        "display":"grid",
        "gridTemplateColumns": "repeat(3, 1fr)",
        "rowGap": "30px",
        "columnGap": "10px",
        "alignItems": "center"
    }
    const body = {
        "margin": 0,
        "padding": 0,
        "border": 0,
        "backgroundImage": "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1 100%)",
    }

    const nome = {
        display: "block",
        borderRadius: "4px",
        margin: "10px",
        border: "none",
        outline: "none",
        width: "400px",
        fontSize: "40px"
    }
    function reset(){
        document.querySelectorAll("#round").forEach(function(element){
            element.display = "none";
      })
    }

    return (
    <div style={body}>
        <Head>
            <title>{props.tema}</title>
            <link rel="shortcut icon" type="image/png" href="https://github.com/Gabrielbzl001/ghostk/blob/master/favicon.png?raw=true"/>
        </Head>
        <h1>Qual é a pergunta?</h1>
        <div id="round" style={d} onClick={reset}>
        <input type="text" placeholder="Nome" style={nome} name="nome" onChange={handleChange}></input>
        {props.p.map((p, i) =>{
            function mudaCor(e){
                setV(v == 'block' ? 'none' : 'block')
            }
            const [v, setV] = useState('none')
            return <Pergunta key={i} cor={p.c} onClick={mudaCor} display={v} onChange={handleChange}>{p.p}</Pergunta>
        })}
        <div>
<<<<<<< HEAD
        <button style={button} onClick={handleClick} >Enviar respostas</button>
=======
        <button style={button} onClick={handleClick} >Enviar respostas...ou perguntas?</button>
>>>>>>> main
        <Link href="/gabarito"><a><button style={button} id="gabarito" disabled>Ver Gabarito</button></a></Link>
        </div>
        </div>
    </div>
    )
}

export async function getServerSideProps(query){
    const {tema} = query.query
    const { db } = await connectToDatabase();
    const data = await db
    .collection("temas")
    .findOne({tema: tema})
    let {p} = await data
    return { props: {p, tema} }
}


export default Jogar