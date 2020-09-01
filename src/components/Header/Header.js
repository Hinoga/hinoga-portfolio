import React, { createRef, useEffect } from 'react'

import { Container } from 'reactstrap'

const HeaderComponent = () => {
  let pageHeader = createRef()

  useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3
        pageHeader.current.style.transform =
          'translate3d(0,' + windowScrollTop + 'px,0)'
      }
      window.addEventListener('scroll', updateScroll)
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll)
      }
    }
  })

  return (
    <>
      <div
        className='page-header clear-filter page-header-small'
        filter-color='blue'
      >
        <div
          className='page-header-image'
          style={{
            backgroundImage: 'url(' + require('assets/img/bg9.jpeg') + ')'
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className='photo-container'>
            <img alt='...' src={require('assets/img/me.jpeg')}></img>
          </div>
          <h3 className='title'>Oscar Gallego</h3>
          <p className='category'>Software Engineer</p>
          {/* <div className='content'>
            <div className='social-description'>
              <h2>26</h2>
              <p>Comments</p>
            </div>
            <div className='social-description'>
              <h2>26</h2>
              <p>Comments</p>
            </div>
            <div className='social-description'>
              <h2>48</h2>
              <p>Bookmarks</p>
            </div>
          </div> */}
        </Container>
      </div>
    </>
  )
}

export default HeaderComponent
