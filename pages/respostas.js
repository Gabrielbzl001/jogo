import { connectToDatabase } from "../utils/dbConnect";
import {useState} from 'react'


export default function Respostas(props){
    const [respo, setRespo] = useState()    
    const [nome, setNome] = useState(props.nomes[0])
    const [tema, setTema] = useState(props.temas[0])
    function handleSelect(e){
        e.target.name == 'tema' ? setTema(e.target.value) : setNome(e.target.value)
    }
    async function hook(){
        try {
            const res = await fetch(`api/name?nome=${nome}&tema=${tema}`)
            const {respo, rest} = await res.json()
            setRespo(
            (
            <div>
                {rest.map((r, index)=>{
                    return (
                        <p key={index} style={{color: r.c}}>Resposta: {respo[0].p[index+1] || "Não respondeu"} |  Gabarito {r.r}</p>
                        )
                    } )}
            </div>
            )
            )   
        } catch (error) {
            
        }
    }
    return(   
    <div>
        <h1>Escolha um tema</h1>
        <select name="tema" onClick={handleSelect}>
            {props.temas.map((n, index) => {
                return(
                    <option key={index}>{n}</option>
                )
            })}
        </select>
        <h1>Escolha um nome</h1>
        <select name="nome" onClick={handleSelect}>
            {props.nomes.map((n, index) => {
                return(
                    <option key={index}>{n}</option>
                )
            })}
        </select>
        <button onClick={hook}>Buscar</button>
        <div>
            {respo}
        </div>
    </div>
)
}

export async function getServerSideProps(query){
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