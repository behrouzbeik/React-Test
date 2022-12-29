import React, { Component } from 'react'
import Comment from './Comment'
import Post from './Post'

export default class Content extends Component {
    constructor(props){
        super(props)
        this.state={
            comment:null
        }
    }
    async getComment(){
        const response = await fetch(`http://localhost:3001/comments?post-id=${this.props.post.id}`)
        return await response.json()
    }
    componentDidMount(){
        if(this.props.post){
            this.getComment().then(data=>this.setState({
                comment:data
            }))
        }
        
    }
    componentDidUpdate(prevProps){
        if(prevProps.post.id !== this.props.post.id){
            this.getComment().then(data=>this.setState({
                comment:data
            }))
        }
    }
  render() {
    const commentTexts = this.state.comment ? this.state.comment.map((el, index)=><Comment commentText={el.body}/>):null
    //   console.log(commentText.length)
    return (
        <div className="container">
            <Post post={this.props.post}/>
            <div className="comments">
            <p>Comments:</p>
                {commentTexts}
            </div>
        </div>
    )
  }
}
