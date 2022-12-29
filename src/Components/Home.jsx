import React, { Component } from 'react'
import Blog from "./Blog";
import Login from "./Login/Login";

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            islogin:false
        }
    }
    handelLogin(){
        this.setState((state) => {
            console.log(this.state.islogin)
            return {
                islogin: !state.islogin,
            };
        })
    }

  render() {
    const showPage = this.state.islogin ? <Blog/> : <Login onClick={this.handelLogin}/>
    return (
        showPage
    )
  }
}
