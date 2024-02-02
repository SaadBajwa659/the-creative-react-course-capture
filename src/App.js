import React from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyled";
// Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
// Router
import { Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />}/>
        <Route path="/work" exact element={<OurWork />}/>
        <Route path="/work/:id" element={<MovieDetail />}/>
        <Route path="/contact" element={<ContactUs />}/>
      </Routes>
    </div>
  );
}

export default App;
