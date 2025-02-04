import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserEnqForm from './pages/UserEnqForm/UserEnqForm'

function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<UserEnqForm/>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
