import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import React from 'react'
import Header from "./Components/Header/Header"
import Kalam from "./Pages/Kalam"
import Footer from "./Components/Footer/Footer"



const App = () => {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
       <Route path='/' element={<Kalam/>} />
        </Routes>
        <Footer />
        </Router>
    </div>
  )
}

export default App
