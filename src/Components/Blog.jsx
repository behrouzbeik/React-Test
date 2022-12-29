import React, { Component } from 'react'
import Content from './Content'
import SideBar from './SideBar'
import '../App.css'

export default class Blog extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:null,
            currentPost:null,
        }
    }
    async getPost(){
        const response= await fetch('http://localhost:3001/posts')
        return await response.json()
    }
    componentDidMount(){
        this.getPost().then(data=>this.setState({
            posts:data,
            currentPost:0
        }))
    }
    handleChangeCurrentPost(el){
        this.setState({
            currentPost:el
        })

    }
  render() {
    return (
      <>
      <SideBar handleClick={this.handleChangeCurrentPost.bind(this)} posts={this.state.posts}/>
      {null != this.state.currentPost && <Content post={this.state.posts[this.state.currentPost]}></Content>}
      </>
    )
  }
}
