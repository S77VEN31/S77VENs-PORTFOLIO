// React
import React from 'react'
// Icons
import TitleDescriptionLogo from '../../../../assets/images/png/logo.png'
// Styles
import './HomeNavBar.css'

const HomeNavBar = () => {
  setTimeout(() => {
    const displayEffect = document.querySelectorAll('.navbar-item')
    for (let i = 0; i < displayEffect.length; i++) {
      displayEffect[i].classList.remove('display-effect')
      displayEffect[i].classList.add('glitch-effect')
    }
  }, 1000)

  setInterval(() => {
    const elements = document.querySelectorAll('.glitch-effect')
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove('paused')
      elements[i].style.animationPlayState = 'running'
    }
    setTimeout(() => {
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.animationPlayState = 'paused'
        elements[i].classList.add('paused')
      }
    }, 1000)
  }, 6000)
  return (
    <header className='navbar-main-container'>
      <img
        style={{ maxWidth: 100 }}
        src={TitleDescriptionLogo}
        className='logo-shake-effect'
      />
      <nav className='navbar-routes-container'>
        <li className='Inter-Black-H2 navbar-item text-hover paused display-effect'>
          Home
        </li>
        <li className='Inter-Black-H2 navbar-item text-hover paused display-effect'>
          About
        </li>
        <li className='Inter-Black-H2 navbar-item text-hover paused display-effect'>
          Contact
        </li>
        <li className='Inter-Black-H2 navbar-item text-hover paused display-effect'>
          Testimonials
        </li>
        <li className='Inter-Black-H2 navbar-item text-hover paused display-effect'>
          Updates
        </li>
      </nav>
    </header>
  )
}
export default HomeNavBar
