import React from 'react'
import '../App.css'

export default function Comment(props) {
    
    return (
        <div className="comment">
            <p>{props.commentText}</p>
        </div>
    )
}
