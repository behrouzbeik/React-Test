import React from 'react'

export default function Post(props) {
  const img = `./assets/${props.post.image}`
  return (
    <div className="post">
        <img src={img} alt="{props.post.title}"/>
        <h1>{props.post.title}</h1>
        <div>{props.post.body}</div>
    </div>
  )
}
