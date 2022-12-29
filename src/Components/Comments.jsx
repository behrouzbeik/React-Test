import React, { Component } from 'react'
import Comment from './Comment'

export default class 
 extends Component {
  render() {
    //const commentTexts=props.comments ? props.comments.map((el,index)=><Comment commentText=props.comments.comment[index]></Comment>):null
    // <Link title={el.title} index={index} key={el.id} handleClick={props.handleClick}/>):null
    // <Comment commentText="MyComment"></Comment>
    // 
    return (
        <div className="comments">
            <p>Comments:</p>
            commentTexts
            <div className="comment">
                <p>Comment 2</p>
            </div>
            <div className="comment">
                <p>Comment 3</p>
            </div>
        </div>
    )
  }
}
