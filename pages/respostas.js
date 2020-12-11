import { connectToDatabase } from "../utils/dbConnect";
import {useState} from 'react'


export default function Respostas(props){
    const [respo, setRespo] = useState('')

    const colors = ['red', 'blue', 'green', 'yellow', 'brown', 'orange', 'purple', 'pink', '#78C9FB', '#13FE00']
    
    async function handleSelect(e){
        const nome = e.target.value
        const res = await fetch(`api/name?nome=${nome}`)
        const per = await res.json()
        setRespo(
            (
            <div>
                <p style={{color: colors[0]}}>Pergunta: {per[0]? per[0].p1 : "Não respondeu"} | Gabarito: Qual o nome do processo permanente e constante de aperfeiçoamento dos saberes necessários à atividade dos educadores e é realizada após a formação inicial com objetivo de assegurar um ensino de qualidade cada vez maior aos alunos?</p>
                <p style={{color: colors[1]}}>Pergunta: {per[0]? per[0].p2: "Não respondeu"} | Gabarito: Na escola pública, as coordenações pedagógicas constituem espaços privilegiados de formação continuada, planejamento e organização do trabalho pedagógico?</p>
                <p style={{color: colors[2]}}>Pergunta: {per[0]? per[0].p3: "Não respondeu"} | Gabarito: No Brasil, em que ano começou a dar destaque e enfoque nas práticas pedagógicas pelo docente?</p>
                <p style={{color: colors[3]}}>Pergunta: {per[0]? per[0].p4: "Não respondeu"} | Gabarito: Qual tendência reﬂexiva o texto apresenta como um novo paradigma na formação de professores?</p>
                <p style={{color: colors[4]}}>Pergunta: {per[0]? per[0].p5: "Não respondeu"} | Gabarito: Fale algumas características do conhecimento proﬁssional para Tardif (1999):</p>
                <p style={{color: colors[5]}}>Pergunta: {per[0]? per[0].p6: "Não respondeu"} | Gabarito: São categorias identiﬁcadas por Gauthier e seus colaboradores relacionadas às proﬁssões:</p>
                <p style={{color: colors[6]}}>Pergunta: {per[0]? per[0].p7: "Não respondeu"} | Gabarito: Ofícios sem saberes:</p>
                <p style={{color: colors[7]}}>Pergunta: {per[0]? per[0].p8: "Não respondeu"} | Gabarito: Saberes sem ofício?</p>
                <p style={{color: colors[8]}}>Pergunta: {per[0]? per[0].p9: "Não respondeu"} | Gabarito: O que é o ofício feito de saberes?</p>
                <p style={{color: colors[9]}}>Pergunta: {per[0]? per[0].p10: "Não respondeu"} | Gabarito: Pimenta (1999) em uma pesquisa identiﬁca três tipos de saberes da docência, quais são eles?</p>
            </div>
            
            )
        )
    }
    return(   
    <div>
        <h1>Escolha um nome</h1>
        <select onChange={handleSelect}>
        <option value="" disabled selected>Escolha um nome</option>
            {props.nomes.map((n, index) => {
                return(
                    <option key={index}>{n}</option>
                )
            })}
        </select>
        <h1>Escolha um tema</h1>
        <select onChange={handleSelect}>
            {props.temas.map((n, index) => {
                return(
                    <option key={index}>{n}</option>
                )
            })}
        </select>
        <div>
            {respo}
        </div>
    </div>
)
}

export async function getStaticProps(query){
    const { db } = await connectToDatabase();

    const data = await db
    .collection("respostas")
    .find({})
    .toArray();
    let nomes = data.map(d => {
        return d.nome
    })
    const res = await db
    .collection("temas")
    .find({})
    .toArray();
    let temas = res.map(d => {
        return d.tema
    })
    

    return { props: {nomes, temas}}
    }