import React, { Component } from 'react'

export default class Content extends Component {
    constructor(props){
        super(props)
        this.state={
            number1:0,
            number2:0,
            total:0,
        }
    }
    setNumber1(event){
        this.setState({number1: event.target.value});
    }
    setNumber1(event){
        this.setState({number1: event.target.value});
    }
    addClick(){
        this.setState({
            total:this.state.number1 + this.state.number2,
        })
    }
    minusClick(){
        this.setState({
            total:this.state.number1 - this.state.number2,
        })
    }
    mulClick(){
        this.setState({
            total:this.state.number1 * this.state.number2,
        })
    }
    DivisionClick(){
        this.setState({
            total:this.state.number1 / this.state.number2,
        })
    }

    render() {
        return(
            <>
                <h1>{this.props.bodyContent}</h1>
                <input  defaultValue={0} type="number" id="number1" name="number1" onChange={this.setNumber1}></input>
                <button type='button' onClick={this.addClick.bind(this)}>+</button>
                <button type='button' onClick={this.minusClick.bind(this)}>-</button>
                <button type='button' onClick={this.mulClick.bind(this)}>*</button>
                <button type='button' onClick={this.DivisionClick.bind(this)}>/</button>
                <input defaultValue={0} type="number" id="number2" name="number2" onChange={this.setNumber1}></input>
                <label value={this.state.number1} >= 0</label>
            </>
        )
    }
}