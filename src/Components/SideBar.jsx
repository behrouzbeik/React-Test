import React from 'react'
import Link from './Link'

export default function SideBar(props) {
    const links=props.posts ? props.posts.map((el,index)=><Link title={el.title} index={index} key={el.id} handleClick={props.handleClick}/>):null
  return (
    <aside>
    <ul>
        {links}
    </ul>

</aside>
  )
}
