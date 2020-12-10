import Head from "next/head"
import Contador from '../components/Contador'
import Link from 'next/link'
import Pergunta from '../components/Pergunta'

function Jogar(){
    async function handleClick(e){
        e.preventDefault()
        if(form.nome) await salva(form)
    }
    let form = {}
    function handleChange(e){
        const {name, value} = e.target
        form[name] = value
    }

    async function salva(form){
        await fetch('api/name', {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(form)
          })
          document.querySelector('#gabarito').disabled = false
          document.querySelector('#gabarito').preventDefault = true
    }
    
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
    <html>
    <body style={body}>
        <Head>
            <title>Qual é a pergunta?</title>
            <link rel="shortcut icon" type="image/png" href="https://github.com/Gabrielbzl001/ghostk/blob/master/favicon.png?raw=true"/>
        </Head>
        <h1>Qual é a pergunta?</h1>
        <div id="round" style={d} onClick={reset}>
        <input type="text" placeHolder="Nome" style={{display: "block",
            borderRadius: "4px",
            margin: "10px",
            border: "none",
            outline: "none",
            width: "400px",
            fontSize: "40px"}} name="nome" onChange={handleChange}></input>
        <Pergunta cor="red" onChange={handleChange}>A formação continuada de professoresimportante para a percepção das novas práticas pedagógicas, tanto do cotidiano escolar quanto de outras questões que perpassam a prática pedagógica.</Pergunta>
        <Pergunta cor="blue" onChange={handleChange}>O momento da coordenação pedagógica deve proporcionar aoeducador a oportunidade da formação continuada, planejamento e organização do trabalho pedagógico.</Pergunta>
        <Pergunta cor="green" onChange={handleChange}>1990</Pergunta>
        <Pergunta cor="yellow" onChange={handleChange}>A tendência de se considerar o professor em seu processo auto formativo, sua reelaboração dos saberes iniciais em confronto com sua prática vivenciada.</Pergunta>        <Pergunta cor="brown">a) é especializado e formalizado; b) é adquirido na maioria das vezes na universidade, que prevê um título; c) é pragmático, voltado para a solução de problemas; d) é destinado a um grupo que de forma competente poderá fazer uso deles;</Pergunta>        <Pergunta cor="orange">Ofícios sem saberes; saberes sem ofício e ofícios feitos de saberes.</Pergunta>
        <Pergunta cor="purple" onChange={handleChange}>abrange uma falta de sistematização de um saber próprio do docente envolvendo bom senso, intuição, experiência etc.</Pergunta>
        <Pergunta cor="pink" onChange={handleChange}>caracterizam-se pela formalização do ensino, reduzindo a sua complexidade e a reﬂexão que é presente na prática docente. Acabam-se tornando saberes que não condizem com a realidade.</Pergunta>
        <Pergunta cor="#78C900" onChange={handleChange}>Abrange vários saberes que são mobilizados pelo professor e sua práticaenvolvendo o saber.</Pergunta>
        <Pergunta cor="#13FE00" onChange={handleChange}>a) da experiência, b) do conhecimento, C) dos saberes pedagógicos.</Pergunta>
        <div>
        <button style={{marginLeft: '12px',width: "400px", fontSize: "20px"}} onClick={handleClick} >Enviar respostas...ou perguntas?</button>
        <Link href="/sobre"><a><button style={{marginLeft: '12px', width: "400px", fontSize: "20px"}} id="gabarito" disabled="true">Ver Gabarito</button></a></Link>
        </div>
        </div>
    </body>
    </html>
    )
}


export default Jogar