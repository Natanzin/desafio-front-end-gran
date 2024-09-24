import React from 'react'
import Navbar_page from './Navbar_page.js'
import { Container } from 'react-bootstrap'

const Pagina = (props) => {
  return (
    <>
      <Navbar_page></Navbar_page>
      <Container className='mt-3'>
        {props.children}
      </Container>
    </>
  )
}

export default Pagina