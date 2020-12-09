import {useState} from 'react';

export default function Contador(props){
    const [cor, setCor] = useState("none");
    

    function mudaCor(){
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
    }

    return(
        <div>
            <button style={buttonStyle} id={props.id} onClick={mudaCor}><div style={style}>{props.children}</div></button>
        </div>
    )
}