import Pagina from '@/components/Pagina'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Accordion, Button, Card, Col, Row } from 'react-bootstrap'

const disney = () => {
  const [personagens, setPersonagens] = useState([])
  useEffect(() => {
    axios.get('https://api.disneyapi.dev/character').then(result => {
      setPersonagens(result.data.data)
    })
  }, [])
  return (
    <Pagina>
      <h1>API da Disney</h1>
      <Row sm={1} md={2} lg={3} xl={4} xxl={5}>
        {personagens.map(item => (
          <Col key={item._id}>
            <Card className='mb-2' style={{ width: '16rem' }}>
              <Card.Img variant="top" src={item.imageUrl} height={200} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Filmes</Accordion.Header>
                      <Accordion.Body>
                        {item.films.map(film => (
                          <p>{film}</p>
                        ))}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Curtas</Accordion.Header>
                      <Accordion.Body>
                        {item.shortFilms.map(curta => (
                          <p>{curta}</p>
                        ))}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Séries</Accordion.Header>
                      <Accordion.Body>
                        {item.tvShows.map(serie => (
                          <p>{serie}</p>
                        ))}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                </Card.Text>
                <Button target='_blank' className='w-100' variant="primary" href={item.sourceUrl}>Sobre o Personagem</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Pagina>
  )
}

export default disney