import Link from "next/link"
import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import { connectToDatabase } from "../utils/dbConnect";

export default function Home(props){
    const [tema, setTema] = useState('Saberes docentes e a formação dos professores')
    async function handleSelect(e){
        const {value} = e.target
        setTema(value)
    }
    const button = {
        "font": "35px sans-serif",
        "outline":"none",
        "border":"none",
        "backgroundColor": '#787FF0',
        "textDecoration":"none",
        "justifyContent":"center",
        "width" : "200px",
        "height": "100px",
        "borderRadius": "50px",
        "margin": "25px"
    }
    const selectButton = {
        "font": "25px sans-serif",
        "outline":"none",
        "border":"none",
        "backgroundColor": '#787FF0',
        "textDecoration":"none",
        "justifyContent":"center",
        "borderRadius": "10px",
        "margin": "5px"
    }
     const body = 
      {
        "fontSize": "1.2rem",
        "margin": 0,
        "padding": 0,
        "border": 0,
        "background": "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1 100%)"}

    return(
        <body style={body}>
            <Head>
            <title>Bem-vindo!</title>
            <link rel="shortcut icon" type="image/png" href="data:image/png;base64,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"/>
        </Head>
        <div style={{margin:'50px'}}>    
            <h1>Instruções</h1>
            <ul style={{fontSize:'22px', lineHeight:'50px'}}>
                <li>Escolha um tema</li>
                <li>Jogue individualmente ou <strong>monte uma equipe</strong></li>
                <li>Clique nos cartões para revelar o conteúdo e reflita: Qual é a pergunta?</li>
                <li>Cada campo tem um cartão de cor correspondente e deve ser preenchido com sua conclusão</li>
                <li>Ao término da resolução, um botão para o gabarito será liberado</li>
                <li>O objetivo do jogo é acertar o maior número de perguntas</li>
                <li>As respostas serão enviadas para o professor, que conduzirá uma discussão com a turma sobre o entendimento de cada estudante acerca do tema proposto</li>
            </ul>
            <h1>Tema</h1>
            <div>
                <select style={selectButton} onChange={handleSelect}>
                <option value="" disabled selected>Escolha um tema</option>
                    {props.temas.map((n, index) => {
                        return(
                            <option key={index} value={n}>{n}</option>
                        )
                    })}
                </select>
            </div>
            <Link href={{pathname: "/jogar", query: {tema: tema}}}>
                    <a><button style={button}>Jogar</button></a>
            </Link>
        </div>
        <footer>Este jogo foi produzido com base no texto <strong>Saberes docentes e formação de professores: Um breve panorama da pesquisa brasileira</strong>, por Cecília Maria Fernandes Nunes</footer>
        </body>
    )
}

export async function getStaticProps(query){
    const { db } = await connectToDatabase();

    const data = await db
    .collection("temas")
    .find({})
    .toArray();
    let temas = data.map(d => {
        return d.tema
    })
    return { props: {temas}, revalidate: 1 }
    }