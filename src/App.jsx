<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Kalam from "./Pages/Kalam";
=======
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import React from 'react'
import Header from "./Components/Header/Header"
import Kalam from "./Pages/Kalam"
import Footer from "./Components/Footer/Footer"


>>>>>>> origin/Shibu

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Kalam />} />
      </Routes>
      <Footer />
    </Router>
  );
};
=======
       <Route path='/' element={<Kalam/>} />
        </Routes>
        <Footer />
        </Router>
    </div>
  )
}
>>>>>>> origin/Shibu

export default App;
