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
  GrMysql,
  SiExpress,
  FaGit,
  DiNpm,
  AiFillGithub,
} from 'react-icons/all'
import { SiHtml5 } from 'react-icons/si'
import { DiCss3 } from 'react-icons/di'
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
            <div className='mt-2'>
              <p style={{ lineHeight: '32px', fontSize: '20px' }}>
                I'm a Full-Stack Web Developer using the MERN stack to build
                amazing applications. I use ReactJS technology for the Frontend,
                Redux for State Management, NodeJS and ExpressJS for the Backend
                as well as MongoDB and MySQL for storing data.
              </p>
              <p
                className='text-success mt-3'
                style={{ lineHeight: '32px', fontSize: '20px' }}
              >
                My long-term goal in my career is to become a proficient AWS
                DevOps Engineer. I will be interested to solidify my knowledge
                by obtaining the Developer and/or SysOps Administrator Associate
                certifications as well as the DevOps Professional certification.
              </p>

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
          <h3 className='text-center mt-5 mb-3 text-uppercase'>Skill set</h3>
          {/* <div className='col-lg-12'>
            <div className='d-flex text-center justify-content-between  mb-3 col-6 col-sm-3 col-lg-12'>
              <button className='btn'>
                <ImHtmlFive style={{ fontSize: '30px' }} />
                <p>Html5</p>
              </button>
              <button className='btn'>
                <IoLogoCss3 style={{ fontSize: '30px' }} />
                <p>CSS3</p>
              </button>
              <button className='btn'>
                <SiBootstrap style={{ fontSize: '30px' }} />
                <p>Bootstrap</p>
              </button>

              <button className='btn'>
                <SiJavascript style={{ fontSize: '30px' }} />
                <p>JavaScript</p>
              </button>
              <div className='btn'>
                <GrReactjs style={{ fontSize: '30px' }} />
                <p>ReactJs</p>
              </div>
              <button className='btn'>
                <SiRedux style={{ fontSize: '30px' }} />
                <p>Redux</p>
              </button>

              <button className='btn'>
                <FaNodeJs style={{ fontSize: '30px' }} />
                <p>NodeJs</p>
              </button>
              <button className='btn'>
                <SiMongodb style={{ fontSize: '30px' }} />
                <p>MongoDB</p>
              </button>
              <button className='btn'>
                <GrMysql style={{ fontSize: '30px' }} />
                <p>MySQL</p>
              </button>
              <button className='btn'>
                <SiExpress style={{ fontSize: '30px' }} />
                <p>ExpressJS</p>
              </button>
              <button className='btn'>
                <SiNextdotjs style={{ fontSize: '30px' }} />
                <p>NextJs</p>
              </button>
              <button className='btn'>
                <DiNpm style={{ fontSize: '30px' }} />
                <p>NPM</p>
              </button>
              <button className='btn'>
                <FaGit style={{ fontSize: '30px' }} />
                <p>Git</p>
              </button>
              <button className='btn'>
                <AiFillGithub style={{ fontSize: '30px' }} />
                <p>GitHub</p>
              </button>
            </div>
          </div> */}

          <div className='row text-center justify-content-evenly m-3'>
            <div className='col-lg-12'>
              <button className='btn'>
                <SiHtml5 style={{ fontSize: '30px' }} /> <br />
                <p>Html5</p>
              </button>

              <button className='btn'>
                <DiCss3 style={{ fontSize: '30px' }} />

                <p>Css3</p>
              </button>

              <button className='btn'>
                <SiBootstrap
                  style={{
                    fontSize: '30px',
                  }}
                />
                <p>Bootstrap</p>
              </button>

              <button className='btn'>
                <SiJavascript style={{ fontSize: '30px' }} />

                <p>JavaScript</p>
              </button>

              <button className='btn'>
                <GrReactjs
                  style={{
                    fontSize: '2.4rem',
                  }}
                />
                <p>React</p>
              </button>

              <button className='btn'>
                <SiRedux style={{ fontSize: '30px' }} />
                <p>Redux</p>
              </button>

              <button className='btn'>
                <FaNodeJs style={{ fontSize: '30px' }} />
                <p>NodeJs</p>
              </button>
              <button className='btn'>
                <SiMongodb style={{ fontSize: '30px' }} />
                <p>MongoDB</p>
              </button>
              <button className='btn'>
                <GrMysql style={{ fontSize: '30px' }} />
                <p>MySQL</p>
              </button>
              <button className='btn'>
                <SiExpress style={{ fontSize: '30px' }} />
                <p>ExpressJS</p>
              </button>
              <button className='btn'>
                <SiNextdotjs style={{ fontSize: '30px' }} />
                <p>NextJs</p>
              </button>
              <button className='btn'>
                <DiNpm style={{ fontSize: '30px' }} />
                <p>NPM</p>
              </button>
              <button className='btn'>
                <FaGit style={{ fontSize: '30px' }} />
                <p>Git</p>
              </button>
              <button className='btn'>
                <AiFillGithub style={{ fontSize: '30px' }} />
                <p>GitHub</p>
              </button>
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default About
