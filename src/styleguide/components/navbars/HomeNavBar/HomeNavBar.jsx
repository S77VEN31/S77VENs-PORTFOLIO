import React, { useEffect } from 'react'
import TitleDescriptionLogo from '../../../../assets/images/png/logo.png'
import './HomeNavBar.css'

const HomeNavBar = () => {
  useEffect(() => {
    const header = document.querySelector('header')
    header.addEventListener('wheel', (e) => {
      e.preventDefault()
    })
    return () => {
      header.removeEventListener('wheel')
    }
  }, [])

  let prevScrollPos = window.pageYOffset

  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset
    const mainHeader = document.querySelector('.navbar-main-container')

    if (prevScrollPos > currentScrollPos) {
      mainHeader.classList.remove('hide')
    } else {
      mainHeader.classList.add('hide')
    }

    prevScrollPos = currentScrollPos
  }

  return (
    <div>
      <header className='navbar-main-container'>
        <img
          style={{ maxWidth: 100 }}
          src={TitleDescriptionLogo}
          className='testxd'
        />
        <ol className='navbar-routes-container'>
          <li className='Inter-Black-H2 route-container text-hover glitch-effect'>
            <span aria-hidden="true">Home</span>
            Home
            <span aria-hidden="true">Home</span>
          </li>
          <li className='Inter-Black-H2 route-container text-hover glitch-effect'>
            About
          </li>
          <li className='Inter-Black-H2 route-container text-hover glitch-effect'>
            Contact
          </li>
          <li className='Inter-Black-H2 route-container text-hover glitch-effect'>
            Testimonials
          </li>
          <li className='Inter-Black-H2 route-container text-hover glitch-effect'>
            Updates
          </li>
        </ol>
      </header>
    </div>
  )
}
export default HomeNavBar
