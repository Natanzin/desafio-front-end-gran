import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const contador = () => {

  const [quantidade, setQuantidade] = useState(0)

  function mais() {
    setQuantidade(quantidade + 1)
  }
  function menos() {
    setQuantidade(quantidade - 1)
  }

  return (
    <Pagina>
      <h1>Contador</h1>
      <Button onClick={mais}>+</Button>
      <Button className='ms-3' onClick={menos}>-</Button>
      <h2 className='mt-3'>{quantidade}</h2>
    </Pagina>
  )
}

export default contador