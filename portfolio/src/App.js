import React from 'react';
import logo from './logo.svg';
import {  } from "module";
import './App.css';
import Navigation from './components/Navbar/Navigation'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
