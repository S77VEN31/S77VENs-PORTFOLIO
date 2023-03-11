import React from 'react'
import ReactDOM from 'react-dom'
import HomeNavBar from './styleguide/components/navbars/HomeNavBar/HomeNavBar'
import './App.css'
const App = () => {
  return (
    <div className='app-main-container '>
      <HomeNavBar />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
