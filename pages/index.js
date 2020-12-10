import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.min.css'
import Test from "../components/Test"
import Pergunta from "../components/Pergunta"


export default function Home(){
    const button = {
        "font": "sans-serif",
        "outline":"none",
        "border":"none",
        "backgroundColor": '#78C9FB',
        "textDecoration":"none",
        "justifyContent":"center",
        "width" : "200px",
        "height": "100px",
        "borderRadius": "50px"
    }
     const body = 
      {
        "margin": 0,
        "padding": 0,
        "border": 0,
        "backgroundImage": "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1 100%)",       }

    return(
        <body style={body}>
        <div style={{margin:'50px'}}>    
            <h1>Instruções</h1>
            <ul style={{fontSize:'22px', lineHeight:'50px'}}>
                <li>Este jogo foi produzido com base no texto <strong>Saberes docentes e formação de professores: Um breve panorama da pesquisa brasileira</strong>, por Cecília Maria Fernandes Nunes</li>
                <li>Monte sua equipe</li>
                <li>Clique nos cartões para revelar seu conteúdo e discuta com sua equipe: Qual é a pergunta?</li>
                <li>Cada campo, que tem um cartão de cor correspondente, deve ser preenchido com a resposta definida pelo grupo</li>
                <li>Ao término da resolução, um botão para a página do gabarito será liberado</li>
                <li>O objetivo do jogo é acertar o maior número de perguntas</li>
                <li>As respostas serão enviadas para o professor, que conduzirá uma discussão com a turma sobre o entendimento de cada grupo acerca do tema proposto</li>
            </ul>
            <Link href="/jogar">
                    <a><button style={button}>Jogar</button></a>
            </Link>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Pergunta display="none" cor="blue">as</Pergunta>
        </div>
        </body>
    )
}