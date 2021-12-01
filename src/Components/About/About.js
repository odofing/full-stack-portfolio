import React from 'react'
import { Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import {
  ImHtmlFive,
  SiNextdotjs,
  IoLogoCss3,
  SiBootstrap,
  SiJavascript,
  GrReactjs,
  SiRedux,
  FaNodeJs,
  SiMongodb,
  SiExpress,
  FaGit,
  DiNpm,
  AiFillGithub,
} from 'react-icons/all'
import Img from '../../assests/about.svg'

const About = () => {
  return (
    <>
      <Container className='mt-2'>
        <h1 className='text-center text-success mt-2'>About </h1>
        <hr />
        <Row>
          <Col md={7}>
            <div className='Img'>
              <img
                src={Img}
                alt='Gbadamosi'
                width='70%'
                height='70%'
                className='Img d-none d-md-block ml-0'
              />
            </div>
          </Col>
          <Col md={5}>
            <div className='mt-3'>
              <h6>
                I'm a Full-Stack Web Developer using the MERN stack to build
                amazing applications. I use the ReactJS technology for the
                Frontend, Redux for State Management, NodeJS and ExpressJS for
                the Backend as well as MongoDB for storing data.
              </h6>
              <h6 className='text-success mt-3'>
                My long-term goal in my career is to become a proficient AWS
                DevOps Engineer. I will be interested to solidify my knowledge
                by obtaining the Developer and/or SysOps Administrator Associate
                certifications as well as the DevOps Professional certification.
              </h6>

              <a
                className='btn btn-success ml-auto mt-3'
                type='btn'
                rel='noopener noreferrer'
                target='_blank'
                href='https://res.cloudinary.com/dy6qqzift/image/upload/v1616255452/odofin_gbadamosi_20032021_z5kgjy.pdf'
              >
                {' '}
                View Résumé
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} sm={12} lg={12}>
            <h3 className='text-center m-5 text-uppercase'>Skill set</h3>
            <div className='icons d-flex justify-content-between text-center'>
              <div className='html'>
                <ImHtmlFive style={{ fontSize: '30px' }} />
                <p>Html5</p>
              </div>
              <div className='html'>
                <IoLogoCss3 style={{ fontSize: '30px' }} />
                <p>CSS3</p>
              </div>
              <div className='html'>
                <SiBootstrap style={{ fontSize: '30px' }} />
                <p>Bootstrap</p>
              </div>

              <div className='html'>
                <SiJavascript style={{ fontSize: '30px' }} />
                <p>JavaScript</p>
              </div>
              <div className='html'>
                <GrReactjs style={{ fontSize: '30px' }} />
                <p>ReactJs</p>
              </div>
              <div className='html'>
                <SiRedux style={{ fontSize: '30px' }} />
                <p>Redux</p>
              </div>
              <div className='html'>
                <FaNodeJs style={{ fontSize: '30px' }} />
                <p>NodeJs</p>
              </div>
              <div className='html'>
                <SiMongodb style={{ fontSize: '30px' }} />
                <p>MongoDB</p>
              </div>
              <div className='html'>
                <SiExpress style={{ fontSize: '30px' }} />
                <p>ExpressJS</p>
              </div>
              <div className='html'>
                <SiNextdotjs style={{ fontSize: '30px' }} />
                <p>NextJs</p>
              </div>
              <div className='html'>
                <DiNpm style={{ fontSize: '30px' }} />
                <p>NPM</p>
              </div>
              <div className='html'>
                <FaGit style={{ fontSize: '30px' }} />
                <p>Git</p>
              </div>
              <div className='html'>
                <AiFillGithub style={{ fontSize: '30px' }} />
                <p>GitHub</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About
