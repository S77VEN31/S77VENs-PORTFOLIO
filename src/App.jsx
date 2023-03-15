import React from 'react'
import ReactDOM from 'react-dom'
import HomeNavBar from './styleguide/components/navbars/HomeNavBar/HomeNavBar'
import './App.css'
import CommentInformationCard from './styleguide/components/cards/CommentInformationCard/CommentInformationCard'
const App = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.app-main-content')
    let prevScrollPos = container.scrollTop
    container.addEventListener('scroll', () => {
      const currentScrollPos = container.scrollTop
      const mainHeader = document.querySelector('.navbar-main-container')
      const mainContent = document.querySelector('.app-main-content')
      if (currentScrollPos > 0) {
        mainHeader.classList.remove('box-shadow-none')
        mainHeader.classList.add('box-shadow')
      } else {
        mainHeader.classList.remove('box-shadow')
        mainHeader.classList.add('box-shadow-none')
      }
      if (prevScrollPos > currentScrollPos) {
        mainHeader.classList.remove('hide')
        mainHeader.classList.add('show')
        mainContent.classList.add('margin')
      } else {
        mainHeader.classList.add('hide')
        mainHeader.classList.remove('show')
        mainContent.classList.remove('margin')
      }
      prevScrollPos = currentScrollPos
    })
  })
  return (
    <div className='app-main-container '>
      <HomeNavBar />
      <main className='app-main-content'>
        {
          Array.from({ length: 1000 }, (_, index) => (
            <CommentInformationCard key={index} comment={index} />
          ))
        }
      </main>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
