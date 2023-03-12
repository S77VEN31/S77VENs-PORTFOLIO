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


  setInterval(() => {
    var elements = document.querySelectorAll(".glitch-effect");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('paused');
      elements[i].style.animationPlayState = "running";
    }
    setTimeout (() => {
      for (var i = 0; i < elements.length; i++) { 
        elements[i].style.animationPlayState = "paused";
        elements[i].classList.add('paused');
      }
    }, 1000);
  }, 6000);
  
  
  return (
    <div>
      <header className='navbar-main-container'>
        <div className='my-image'>
          <img
            style={{ maxWidth: 100 }}
            src={TitleDescriptionLogo}
            className='shake'
          />
        </div>
        <ol className='navbar-routes-container'>
          <li className='Inter-Black-H2 route-container text-hover glitch-effect paused'>
            Home
          </li>
          <li className='Inter-Black-H2 route-container text-hover glitch-effect paused'>
            About
          </li>
          <li className='Inter-Black-H2 route-container text-hover glitch-effect paused'>
            Contact
          </li>
          <li className='Inter-Black-H2 route-container text-hover glitch-effect paused'>
            Testimonials
          </li>
          <li className='Inter-Black-H2 route-container text-hover glitch-effect paused'>
            Updates
          </li>
        </ol>
      </header>
    </div>
  )
}
export default HomeNavBar
