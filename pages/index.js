import Link from "next/link"
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
        "font": "sans-serif",
        "outline":"none",
        "border":"none",
        "backgroundColor": '#78C9FB',
        "textDecoration":"none",
        "justifyContent":"center",
        "width" : "200px",
        "height": "100px",
        "borderRadius": "50px",
        "margin": "30px"
    }
     const body = 
      {
        "margin": 0,
        "padding": 0,
        "border": 0,
        "background": "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1 100%)"}

    return(
        <body style={body}>
        <div style={{margin:'50px'}}>    
            <h1>Instruções</h1>
            <ul style={{fontSize:'22px', lineHeight:'50px'}}>
                <li>Este jogo foi produzido com base no texto <strong>Saberes docentes e formação de professores: Um breve panorama da pesquisa brasileira</strong>, por Cecília Maria Fernandes Nunes</li>
                <li>Escolha um tema</li>
                <li>Monte sua equipe</li>
                <li>Clique nos cartões para revelar seu conteúdo e discuta com sua equipe: Qual é a pergunta?</li>
                <li>Cada campo, que tem um cartão de cor correspondente, deve ser preenchido com a resposta definida pelo grupo</li>
                <li>Ao término da resolução, um botão para a página do gabarito será liberado</li>
                <li>O objetivo do jogo é acertar o maior número de perguntas</li>
                <li>As respostas serão enviadas para o professor, que conduzirá uma discussão com a turma sobre o entendimento de cada grupo acerca do tema proposto</li>
            </ul>
            <h1>Tema</h1>
            <div>
            <h1>Escolha um tema</h1>
                <select onChange={handleSelect}>
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