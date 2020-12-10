import {useState} from 'react';

export default function Contador(props){
    const [cor, setCor] = useState("none");
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
    

    function mudaCor(e){
            e.preventDefault()
            setCor("block");
            setTimeout(() => {  setCor("none"); }, 5000);
    }
    const style = {
        "display": cor,
        "font": "25px sans-serif, Arial"
    }
    const buttonStyle = {
        "font": "sans-serif",
        "outline":"none",
        "border":"none",
        "backgroundColor":props.color,
        "textDecoration":"none",
        "justifyContent":"center",
        "width" : "400px",
        "height": "300px",
        "marginLeft": "10px",
        "name": "teste"
    }

    const input ={
        backgroundColor: props.color,
        display: "block",
        borderRadius: "4px",
        margin: "10px",
        border: "none",
        outline: "none",
        width: "400px",
        fontSize: "40px"
    }
    return(
        <div>
                <button style={buttonStyle} id={props.id} onClick={mudaCor}><div style={style}>{props.children}</div></button>
                <input style={input} type="text" name={`p{}`} onChange={handleChange}></input>
        </div>
    )
}