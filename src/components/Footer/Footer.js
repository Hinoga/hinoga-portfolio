import React from 'react'

import { Container } from 'reactstrap'

function FooterComponent() {
  return (
    <>
      <footer className='footer footer-default'>
        <Container>
          <nav>
            <ul>
              <li>
                <a href='#about-me'>About Me</a>
              </li>
              <li>
                <a href='#blog'>Projects</a>
              </li>
              <li>
                <a href='#blog'>Blog</a>
              </li>
            </ul>
          </nav>
          <div className='copyright' id='copyright'>
            © {new Date().getFullYear()} - Hinoga
          </div>
        </Container>
      </footer>
    </>
  )
}

export default FooterComponent
