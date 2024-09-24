import Pagina from '../components/Pagina.js'
import React from 'react'
import { Button } from 'react-bootstrap'

const botoes = () => {
  return (
    <>
      <Pagina>
        <Button>Salvar</Button>
        <Button variant='success'>Salvar</Button>
      </Pagina>
    </>
  )
}

export default botoes