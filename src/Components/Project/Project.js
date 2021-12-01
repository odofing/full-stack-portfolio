import React from 'react'
import Projects from './data'
import { Row, Col, Card, Container } from 'react-bootstrap'

const Project = () => {
  return (
    <Container className='mt-2'>
      <h1 className='text-center text-success'>Projects </h1>
      <hr />
      <Row className='mt-5 m-auto'>
        {Projects.map((project, index) => (
          <Col md={4} key={index} className='m-auto'>
            <Card className='mt-5 rounded bg-dark' border='success'>
              <Card.Img src={project.img} variant='top' alt={project.title} />

              <Card.Body className='text-white text-center'>
                <Card.Title as='h5'>
                  <strong>{project.title}</strong>
                </Card.Title>

                <Card.Text className='text-white text-center' as='p'>
                  {project.desc}{' '}
                </Card.Text>
                <div className='d-flex mt-2 justify-content-around'>
                  <a
                    className='btn btn-success'
                    type='btn'
                    rel='noopener noreferrer'
                    target='_blank'
                    href={project.source}
                  >
                    Source Code
                  </a>
                  <a
                    className='btn btn-success'
                    type='btn'
                    rel='noopener noreferrer'
                    target='_blank'
                    href={project.webpage}
                  >
                    Webpage
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Project
