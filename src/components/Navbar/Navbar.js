import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from 'reactstrap'

const NavbarComponent = () => {
  const [navbarColor, setNavbarColor] = useState('navbar-transparent')
  const [collapseOpen, setCollapseOpen] = useState(false)

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor('')
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor('navbar-transparent')
      }
    }
    window.addEventListener('scroll', updateNavbarColor)
    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor)
    }
  })

  return (
    <>
      {collapseOpen ? (
        <div
          id='bodyClick'
          onClick={() => {
            document.documentElement.classList.toggle('nav-open')
            setCollapseOpen(false)
          }}
        />
      ) : null}
      <Navbar className={'fixed-top ' + navbarColor} color='info' expand='lg'>
        <Container>
          <div className='navbar-translate'>
            <NavbarBrand href='#' id='navbar-brand'>
              Hinoga
            </NavbarBrand>
            <button
              className='navbar-toggler navbar-toggler'
              onClick={() => {
                document.documentElement.classList.toggle('nav-open')
                setCollapseOpen(!collapseOpen)
              }}
              aria-expanded={collapseOpen}
              type='button'
            >
              <span className='navbar-toggler-bar top-bar'></span>
              <span className='navbar-toggler-bar middle-bar'></span>
              <span className='navbar-toggler-bar bottom-bar'></span>
            </button>
          </div>
          <Collapse
            className='justify-content-end'
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink href='#'>Español</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>English</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href='https://twitter.com/hinoga_'
                  target='_blank'
                  id='twitter-tooltip'
                >
                  <i className='fab fa-twitter'></i>
                  <p className='d-lg-none d-xl-none'>Twitter</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href='https://www.instagram.com/oscargallego.h'
                  target='_blank'
                  id='instagram-tooltip'
                >
                  <i className='fab fa-instagram'></i>
                  <p className='d-lg-none d-xl-none'>Instagram</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent
