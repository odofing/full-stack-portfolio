import React from 'react'
import { Container } from 'react-bootstrap'
//import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Socials from '../Socials'
import Img from '../../assests/codinggreen.svg'
import './Homepage.css'

const Homepage = () => {
  return (
    <>
      <Container className='mt-2'>
        <Row>
          <Col md={4}>
            <div className='right text-capitalize'>
              <h5>Hello,</h5>
              <h1 className='text-success font-weight-bold'>I'm Gbadamosi</h1>
              <h5 className='font-weight-bold'>
                a full stack web developer and a cloud technology enthusiast.{' '}
              </h5>
              <Socials />
              {/* <Link
                to='/contact'
                type='button'
                className='btn btn-success mt-4'
              >
                Hire Me
              </Link> */}
              <a
                className='btn btn-success col-5 mt-4'
                type='btn'
                rel='noopener noreferrer'
                target='_blank'
                href='https://res.cloudinary.com/dy6qqzift/image/upload/v1648319425/ODOFIN_26032022_afem4q.pdf'
              >
                View Résumé
              </a>
            </div>
          </Col>
          <Col md={8}>
            <div className='Img'>
              <img
                src={Img}
                alt='Gbadamosi'
                width='80%'
                height='80%'
                className='Img d-none d-md-block'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Homepage
