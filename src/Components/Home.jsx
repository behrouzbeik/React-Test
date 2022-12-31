import React, { Component } from 'react'
import Blog from "./Blog";
import Login from "./Login/Login";

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            islogin:false,
            user:'user1',
            pass:'pass1',
        };
        this.handelLogin = this.handelLogin.bind(this);
    }
    handelLogin(user, pass){
        this.setState({
            islogin: user==this.state.user ? pass==this.state.pass ? true : false : false
        })   
    }

  render() {
    const showPage = this.state.islogin ? <Blog/> : <Login handelLogin={this.handelLogin}/>
    return (
        <>
            {showPage}
        </>
        
    )
  }
}
