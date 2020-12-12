import Link from 'next/link';
import Head from "next/head"
import {useState} from 'react';
import { connectToDatabase } from "../utils/dbConnect";
import Pergunta from '../components/Pergunta'

function Gabarito(props){
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
    const button = {
        "font": " 25px sans-serif",
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

    return (
        <div style={body}>
        <Head>
            <title>{props.tema}</title>
            <link rel="shortcut icon" type="image/png" href="https://github.com/Gabrielbzl001/ghostk/blob/master/favicon.png?raw=true"/>
        </Head>
        <h1>Gabarito</h1>
        <div id="round" style={d}>
        {props.p.map((p, i) =>{
            function mudaCor(e){
                setV(!v)
            }
            const [v, setV] = useState(false)
            return <Pergunta key={i} cor={p.c} onClick={mudaCor}>{v ? p.r : p.p}</Pergunta>
        })}
        <div>
        <Link href="/"><a><button style={button}>Voltar ao Menu</button></a></Link>
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



export default Gabarito