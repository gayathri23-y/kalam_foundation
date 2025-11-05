import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Kalam from "./Pages/Kalam";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Kalam />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
