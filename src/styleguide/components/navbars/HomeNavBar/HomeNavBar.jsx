import React, { useEffect } from 'react'
import TitleDescriptionLogo from '../../../../assets/images/png/logo.png'
import { signal, useComputed } from '@preact/signals-react'
import './HomeNavBar.css'
const counter = signal(0)

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
  const double = useComputed(() => counter.value * 2)
  return (
    <div>
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
    </div>
  )
}
export default HomeNavBar
