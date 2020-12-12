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