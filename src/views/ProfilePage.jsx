import React, { useEffect, useState } from 'react'

import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from 'reactstrap'

import Navbar from 'components/Navbar/Navbar.js'
import Header from 'components/Header/Header.js'
import Footer from 'components/Footer/Footer.js'

const ProfilePage = () => {
  const [pills, setPills] = useState('1')

  useEffect(() => {
    document.body.classList.add('profile-page')
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove('profile-page')
      document.body.classList.remove('sidebar-collapse')
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <Header />
        <div className='section'>
          <Container>
            <div className='button-container'>
              <Button
                className='btn-round btn-icon'
                color='info'
                id='instagram-tooltip'
                size='lg'
                href='https://www.instagram.com/oscargallego.h'
                target='_blank'
              >
                <i className='fab fa-instagram'></i>
              </Button>
              <UncontrolledTooltip target='#instagram-tooltip'>
                Follow me on Instagram
              </UncontrolledTooltip>
              <Button
                className='btn-round btn-icon'
                color='default'
                id='linkedin-tooltip'
                size='lg'
                href='https://www.linkedin.com/in/gallegoscar'
                target='_blank'
              >
                <i className='fab fa-linkedin'></i>
              </Button>
              <UncontrolledTooltip delay={0} target='#linkedin-tooltip'>
                Follow me on LinkedIn
              </UncontrolledTooltip>
              <Button
                className='btn-round btn-icon'
                color='default'
                id='github-tooltip'
                size='lg'
                href='https://github.com/Hinoga'
                target='_blank'
              >
                <i className='fab fa-github'></i>
              </Button>
              <UncontrolledTooltip delay={0} target='#github-tooltip'>
                Follow me on github
              </UncontrolledTooltip>
              <Button
                className='btn-round btn-icon'
                color='default'
                id='twitter-tooltip'
                size='lg'
                href='https://twitter.com/hinoga_'
                target='_blank'
              >
                <i className='fab fa-twitter'></i>
              </Button>
              <UncontrolledTooltip delay={0} target='#twitter-tooltip'>
                Follow me on Twitter
              </UncontrolledTooltip>
            </div>
            <h3 className='title'>About me</h3>
            <h5 className='description'>
              My commitment to my academic studies has allowed me to demonstrate
              my resilience to surpass expectations. Bilingual in both Spanish
              and English, I am comfortable communicating at all levels. With my
              knowledge and ability I have demonstrated the capacity to solve
              complex algorithmic problems, evidencing excellent results in the
              projects that I have worked on and improving and adapting in the
              process.
            </h5>
            <h4 className='title text-center'>More sections comming soon...</h4>
            {/* <Row>
              <Col className='ml-auto mr-auto' md='6'>
                <h4 className='title text-center'>Projects</h4>
                <div className='nav-align-center'>
                  <Nav
                    className='nav-pills-info nav-pills-just-icons'
                    pills
                    role='tablist'
                  >
                    <NavItem>
                      <NavLink
                        className={pills === '1' ? 'active' : ''}
                        onClick={e => {
                          e.preventDefault()
                          setPills('1')
                        }}
                      >
                        <i className='now-ui-icons design_image'></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === '2' ? 'active' : ''}
                        onClick={e => {
                          e.preventDefault()
                          setPills('2')
                        }}
                      >
                        <i className='now-ui-icons location_world'></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === '3' ? 'active' : ''}
                        onClick={e => {
                          e.preventDefault()
                          setPills('3')
                        }}
                      >
                        <i className='now-ui-icons sport_user-run'></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className='gallery' activeTab={'pills' + pills}>
                <TabPane tabId='pills1'>
                  <Col className='ml-auto mr-auto' md='10'>
                    <Row className='collections'>
                      <Col md='6'>
                        <img
                          alt='...'
                          className='img-raised'
                          src={require('assets/img/bg1.jpg')}
                        ></img>
                        <img
                          alt='...'
                          className='img-raised'
                          src={require('assets/img/bg3.jpg')}
                        ></img>
                      </Col>
                      <Col md='6'>
                        <img
                          alt='...'
                          className='img-raised'
                          src={require('assets/img/bg8.jpg')}
                        ></img>
                        <img
                          alt='...'
                          className='img-raised'
                          src={require('assets/img/bg7.jpg')}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId='pills2'>
                  <Col className='ml-auto mr-auto' md='10'>
                    <Row className='collections'>
                      <Col md='6'>
                        <img
                          alt='...'
                          className='img-raised'
                          src={require('assets/img/bg6.jpg')}
                        ></img>
                        <img
                          alt='...'
                          className='img-raised'
                          src={require('assets/img/bg11.jpg')}
                        ></img>
                      </Col>
                      <Col md='6'>
                        <img
                          alt='...'
                          className='img-raised'
                          src={require('assets/img/bg7.jpg')}
                        ></img>
                        <img
                          alt='...'
                          className='img-raised'
                          src={require('assets/img/bg8.jpg')}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId='pills3'>
                  <Col className='ml-auto mr-auto' md='10'>
                    <Row className='collections'>
                      <Col md='6'>
                        <img
                          alt='...'
                          className='img-raised'
                          src={require('assets/img/bg3.jpg')}
                        ></img>
                        <img
                          alt='...'
                          className='img-raised'
                          src={require('assets/img/bg8.jpg')}
                        ></img>
                      </Col>
                      <Col md='6'>
                        <img
                          alt='...'
                          className='img-raised'
                          src={require('assets/img/bg7.jpg')}
                        ></img>
                        <img
                          alt='...'
                          className='img-raised'
                          src={require('assets/img/bg6.jpg')}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row> */}
          </Container>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ProfilePage
