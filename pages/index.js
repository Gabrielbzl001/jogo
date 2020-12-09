import Head from "next/head"
import Contador from '../components/Contador'
import Resposta from '../components/Resposta'

function Home(){
    
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
    function reset(){
        document.querySelectorAll("#round").forEach(function(element){
            element.display = "none";
      })
    }

    return (
    <body style={body}>
        <Head>
            <title>Qual é a pergunta?</title>
            <link rel="shortcut icon" type="image/png" href="https://github.com/Gabrielbzl001/ghostk/blob/master/favicon.png?raw=true"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <h1>Qual é a pergunta?</h1>
        <div id="round" style={d} onClick={reset}>
        <Contador color="red">A formação continuada de professoresimportante para a percepção das novas práticas pedagógicas, tanto do cotidiano escolar quanto de outras questões que perpassam a prática pedagógica.</Contador>
        <Contador color="blue">O momento da coordenação pedagógica deve proporcionar aoeducador a oportunidade da formação continuada, planejamento e organização do trabalho pedagógico.</Contador>
        <Contador color="green">1990</Contador>
        <Contador color="yellow">A tendência de se considerar o professor em seu processo auto formativo, sua reelaboração dos saberes iniciais em confronto com sua prática vivenciada.</Contador>        <Contador color="brown">a) é especializado e formalizado; b) é adquirido na maioria das vezes na universidade, que prevê um título; c) é pragmático, voltado para a solução de problemas; d) é destinado a um grupo que de forma competente poderá fazer uso deles;</Contador>        <Contador color="orange">Ofícios sem saberes; saberes sem ofício e ofícios feitos de saberes.</Contador>
        <Contador color="purple">abrange uma falta de sistematização de um saber próprio do docente envolvendo bom senso, intuição, experiência etc.</Contador>
        <Contador color="pink">caracterizam-se pela formalização do ensino, reduzindo a sua complexidade e a reﬂexão que é presente na prática docente. Acabam-se tornando saberes que não condizem com a realidade.</Contador>
        <Contador color="#78C9FB">Abrange vários saberes que são mobilizados pelo professor e sua práticaenvolvendo o saber.</Contador>
        <Contador color="#13FE00">a) da experiência, b) do conhecimento, C) dos saberes pedagógicos.</Contador>
        <Resposta/>
        </div>
    </body>

    )
}


export default Home