import React from 'react'
import Navbar from './Component/Navbar'
import Content from './Component/Content'
import Footer from './Component/Footer'


export default function App() {
  return(
    <>
      <Navbar navContent='nav content'></Navbar>
      <Content bodyContent='body content'></Content>
      <Footer footerContent='footer content'></Footer>
    </>
  )
}