import Pagina from '@/components/Pagina'
import axios from 'axios'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const endereco = () => {

  const { register, handleSubmit, setValue } = useForm()

  function buscarCep(event) {
    const cep = event.target.value
    if (cep.length == 8) {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(result => {
        const endereco = result.data

        setValue('uf', endereco.uf)
        setValue('cidade', endereco.localidade)
        setValue('bairro', endereco.bairro)
        setValue('logradouro', endereco.logradouro)
        setValue('complemento', endereco.complemento)
      })
    }
  }
  function salvar(dados) {
    console.log(dados)
    alert("Dados enviados com sucesso!")
    setValue('cep', '')
    setValue('uf', '')
    setValue('cidade', '')
    setValue('bairro', '')
    setValue('logradouro', '')
    setValue('complemento', '')
    setValue('numero', '')
  }

  return (
    <Pagina>
      <h1>Endereço</h1>
      <Form>
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>Cep:</Form.Label>
          <Form.Control type="text" placeholder="Insira o CEP" {...register('cep')} onChange={buscarCep} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="uf">
          <Form.Label>UF:</Form.Label>
          <Form.Control type="text" {...register('uf')} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cidade">
          <Form.Label>Cidade:</Form.Label>
          <Form.Control type="text" {...register('cidade')} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro:</Form.Label>
          <Form.Control type="text"{...register('bairro')} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro:</Form.Label>
          <Form.Control type="text" {...register('logradouro')} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Número:</Form.Label>
          <Form.Control type="text" {...register('numero')} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento:</Form.Label>
          <Form.Control type="text" {...register('complemento')} />
        </Form.Group>

        <Button variant="success" onClick={handleSubmit(salvar)}>
          Enviar
        </Button>
      </Form>
    </Pagina>
  )
}

export default endereco