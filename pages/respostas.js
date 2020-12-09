import { connectToDatabase } from "../utils/dbConnect";
import {useState} from 'react'

export default function Respostas(props){
    const [select, setSelect] = useState('')
    const [respo, setRespo] = useState('')
    const colors = ['red', 'blue', 'green', 'yellow', 'brown', 'orange', 'purple', 'pink', '#78C9FB', '#13FE00']

    async function handleSelect(e){
        const nome = e.target.value
        console.log(e.target.value)
        const res = await fetch(`api/name?nome=${nome}`)
        const per = await res.json()
        setRespo(
            (
            <div>
                <p style={{color: colors[0]}}>Pergunta: {per[0].p1}</p>
                <p style={{color: colors[1]}}>Pergunta: {per[0].p2}</p>
                <p style={{color: colors[2]}}>Pergunta: {per[0].p3}</p>
                <p style={{color: colors[3]}}>Pergunta: {per[0].p4}</p>
                <p style={{color: colors[4]}}>Pergunta: {per[0].p5}</p>
                <p style={{color: colors[5]}}>Pergunta: {per[0].p6}</p>
                <p style={{color: colors[6]}}>Pergunta: {per[0].p7}</p>
                <p style={{color: colors[7]}}>Pergunta: {per[0].p8}</p>
                <p style={{color: colors[8]}}>Pergunta: {per[0].p9}</p>
                <p style={{color: colors[9]}}>Pergunta: {per[0].p10}</p>
            </div>
            
            )
        )
    }
    return(   <div>
        <h1>Escolha um nome</h1>
        <select onChange={handleSelect}>
            {props.nomes.map((n, index) => {
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

export async function getStaticProps(){
    const { db } = await connectToDatabase();

    const data = await db
    .collection("respostas")
    .find({})
    .toArray();
    let nomes = data.map(d => {
        return d.nome
    })
    

    return { props: {nomes} }
    }