import React from 'react'

let cont = 0
class Test extends React.Component {
    constructor(props){
        super(props)
        this.cont = cont
        cont++
    }
    render(){
    return<h1>{this.cont}</h1>
    }
}

export default Test