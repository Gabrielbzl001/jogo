import { connectToDatabase } from "../utils/dbConnect";

export default function Test(props){
    return <h1>{props.r} </h1>
}

export async function getServerSideProps(){
    const { db } = await connectToDatabase();

    const r = await db
        .collection("temas")
        .update({tema: 'mat'}, {$push: {p: {p: 'quem sei la o que', q:'eu', c:'pink'}}})
        console.log('feito')
    return { props: {} }
}