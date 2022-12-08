import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            date: new Date(),
            count:0,
        }
        
        setInterval(this.tick.bind(this),1000)
    }
    tick(){
        this.setState({
            date: new Date()
        })
    }
    handleClick(){
        this.setState({
            count:this.state.count + 1
        })
    }
    render() {
        return(
            <>
                <p>{this.props.navContent}   
                time is : {this.state.date.toLocaleTimeString()}</p>
                <p>{this.state.count}</p>
                <button type='button' onClick={this.handleClick.bind(this)}>click</button>
            </>
        )
    }
}