import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import './App.css';
import Nav from "./components/Nav";
import Foot from "./components/Foot";
import Hero from "./components/Hero";
// import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Goals from "./pages/Goals";

function App() {
const [appear] = useState(true);

const FormHandler = (event) => {
 event.preventDefault();

}
  return (
    <Router>
      <Nav />
      <CSSTransition
      in={appear}
      appear={true}
      timeout={5000}
      classNames="fade">
      <Route exact path="/" component={Hero} />
      </CSSTransition>
      <Route exact path="/projects" component={Projects} />
      <CSSTransition
      in={appear}
      appear={true}
      timeout={7000}
      classNames="cards">
      <Route exact path="/goals" component={Goals} />
      </CSSTransition>
      {/* <Route exact path="/contact" component={Contact} /> */}
      <Route exact path="/whoami" component={AboutMe} />
      <Foot />
    </Router>
  );
}

export default App;
