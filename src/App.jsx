import React from 'react'
import ReactDOM from 'react-dom'
import HomeNavBar from './styleguide/components/navbars/HomeNavBar/HomeNavBar'
import './App.css'
import CommentInformationCard from './styleguide/components/cards/CommentInformationCard/CommentInformationCard'
const App = () => {
  let prevScrollPos = window.pageYOffset

  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset
    const mainHeader = document.querySelector('.app-main-content')

    if (prevScrollPos > currentScrollPos) {
      mainHeader.classList.remove('hide')
    } else {
      mainHeader.classList.add('hide')
    }

    prevScrollPos = currentScrollPos
  }
  return (
    <div className='app-main-container '>
      <HomeNavBar />
      <main className='app-main-content'>
        <CommentInformationCard />
      </main>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
