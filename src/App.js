import './App.css';
import React from 'react';
import Header from './components/header.js';
import Home from './components/home.js';
import Contact from './components/contact.js';
import About from './components/about.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Router>
              <Header />
              <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/about" element={<About />}/>
              </Routes>
        </Router>
      </Container>

    )
  }
}

export default App;
