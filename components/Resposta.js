import {useState} from 'react'
import Link from 'next/link'
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

    return (
        <form>
            <div>
            <input placeholder="Nome" style={{display: "block", borderRadius: "4px", margin: "10px", border: "none", outline: "none", width: "400px", fontSize: "40px"}} type="text" name="nome" onChange={handleChange}></input>
            <input style={{backgroundColor: "red", display: "block", borderRadius: "4px", margin: "10px", border: "none", outline: "none", width: "400px", fontSize: "40px"}} type="text" name="p1" onChange={handleChange}></input>
            <input style={{backgroundColor: "blue", display: "block", borderRadius: "4px", margin: "10px", border: "none", outline: "none", width: "400px", fontSize: "40px"}} type="text" name="p2" onChange={handleChange}></input>
            <input style={{backgroundColor: "green", display: "block", borderRadius: "4px", margin: "10px", border: "none", outline: "none", width: "400px", fontSize: "40px"}} type="text" name="p10" onChange={handleChange}></input>
            <input style={{backgroundColor: "yellow", display: "block", borderRadius: "4px", margin: "10px", border: "none", outline: "none", width: "400px", fontSize: "40px"}} type="text" name="p4" onChange={handleChange}></input>
            <input style={{backgroundColor: "brown", display: "block", borderRadius: "4px", margin: "10px", border: "none", outline: "none", width: "400px", fontSize: "40px"}} type="text" name="p5" onChange={handleChange}></input>
            <input style={{backgroundColor: "orange", display: "block", borderRadius: "4px", margin: "10px", border: "none", outline: "none", width: "400px", fontSize: "40px"}} type="text" name="p6" onChange={handleChange}></input>
            <input style={{backgroundColor: "purple", display: "block", borderRadius: "4px", margin: "10px", border: "none", outline: "none", width: "400px", fontSize: "40px"}} type="text" name="p7" onChange={handleChange}></input>
            <input style={{backgroundColor: "pink", display: "block", borderRadius: "4px", margin: "10px", border: "none", outline: "none", width: "400px", fontSize: "40px"}} type="text" name="p8" onChange={handleChange}></input>
            <input style={{backgroundColor: "#78C9FB", display: "block", borderRadius: "4px", margin: "10px", border: "none", outline: "none", width: "400px", fontSize: "40px"}} type="text" name="p9" onChange={handleChange}></input>
            <input style={{backgroundColor: "#13FE00", display: "block", borderRadius: "4px", margin: "10px", border: "none", outline: "none", width: "400px", fontSize: "40px"}} type="text" name="p10" onChange={handleChange}></input>
            </div>
            <button style={{marginLeft: '12px',width: "400px", fontSize: "20px"}} onClick={handleClick} >Enviar respostas...ou perguntas?</button>
            <Link href="/sobre"><a><button style={{marginLeft: '12px', width: "400px", fontSize: "20px"}} id="gabarito" disabled="true">Ver Gabarito</button></a></Link>
        </form>
    )
}