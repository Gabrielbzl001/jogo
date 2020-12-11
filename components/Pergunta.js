import React from 'react'


let cont = 1
class Pergunta extends React.Component{
    constructor(props){
        super(props)
        this.cont = cont
        if(cont == 10) cont = 0
        cont++
        }
    render(){
        const style = {
            "fontColor": this.props.cor,
            "display": this.props.display,
            "font": "25px sans-serif, Arial"
        }
        const buttonStyle = {
            "font": "sans-serif",
            "outline":"none",
            "border":"none",
            "backgroundColor":this.props.cor,
            "textDecoration":"none",
            "justifyContent":"center",
            "width" : "400px",
            "height": "300px",
            "marginLeft": "10px",
            "name": "teste"
        }
    
        const input ={
            backgroundColor: this.props.cor,
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
                <button style={buttonStyle} onClick={this.props.onClick} id={this.id}><div style={style}>{this.props.children}</div></button>
                <input style={input} type="text" name={`p${this.cont}`} onChange={this.props.onChange}></input>
        </div>
    )
    }
}

export default Pergunta