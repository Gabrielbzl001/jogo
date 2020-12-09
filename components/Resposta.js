import {useState} from 'react'
export default function Resposta(prop){
    const [form, setForm] = useState({
        nome: '',
        p1: '',
        p2: '',
        p3: '',
        p4: '',
        p5: '',
        p6: '',
        p7: '',
        p8: '',
        p9: '',
        p10: '',
        })
    const respostas = {
    "display": "block",
    "position": "relative"
    }
    function handleChange(e){
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    async function handleClick(e){
        e.preventDefault()
        if(form.nome) await salva(form)
        console.log('clicado')
        document.querySelector('#gabarito').disabled = false
    }

    async function salva(form){
        const res = await fetch('api/name', {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(form)
          })
          console.log(res)
    }
    const b = {
        "width" : "300px",
        "height": "200px",
        "outline":"none",
        "border":"none",
    }

    return (
        <form method="GET" action="/sobre">
            <div>
            <input placeHolder="Nome" style={{display: "block", borderRadius: "4px", margin: "3px", border: "none", outline: "none", width: "180px"}} type="text" name="nome" onChange={handleChange}></input>
            <input style={{backgroundColor: "red", display: "block", borderRadius: "4px", margin: "3px", border: "none", outline: "none", width: "180px"}} type="text" name="p1" onChange={handleChange}></input>
            <input style={{backgroundColor: "blue", display: "block", borderRadius: "4px", margin: "3px", border: "none", outline: "none", width: "180px"}} type="text" name="p2" onChange={handleChange}></input>
            <input style={{backgroundColor: "green", display: "block", borderRadius: "4px", margin: "3px", border: "none", outline: "none", width: "180px"}} type="text" name="p3" onChange={handleChange}></input>
            <input style={{backgroundColor: "yellow", display: "block", borderRadius: "4px", margin: "3px", border: "none", outline: "none", width: "180px"}} type="text" name="p4" onChange={handleChange}></input>
            <input style={{backgroundColor: "brown", display: "block", borderRadius: "4px", margin: "3px", border: "none", outline: "none", width: "180px"}} type="text" name="p5" onChange={handleChange}></input>
            <input style={{backgroundColor: "orange", display: "block", borderRadius: "4px", margin: "3px", border: "none", outline: "none", width: "180px"}} type="text" name="p6" onChange={handleChange}></input>
            <input style={{backgroundColor: "purple", display: "block", borderRadius: "4px", margin: "3px", border: "none", outline: "none", width: "180px"}} type="text" name="p7" onChange={handleChange}></input>
            <input style={{backgroundColor: "pink", display: "block", borderRadius: "4px", margin: "3px", border: "none", outline: "none", width: "180px"}} type="text" name="p8" onChange={handleChange}></input>
            <input style={{backgroundColor: "#78C9FB", display: "block", borderRadius: "4px", margin: "3px", border: "none", outline: "none", width: "180px"}} type="text" name="p9" onChange={handleChange}></input>
            <input style={{backgroundColor: "#13FE00", display: "block", borderRadius: "4px", margin: "3px", border: "none", outline: "none", width: "180px"}} type="text" name="p10" onChange={handleChange}></input>
            </div>
            <button onClick={handleClick}>Enviar respostas...ou perguntas?</button>
            <button type="submit" id="gabarito" disabled="true">Ver Gabarito</button>
        </form>
    )
}