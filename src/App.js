import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Foot from "./components/Foot";
import Hero from "./components/Hero";
// import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Goals from "./pages/Goals";

function App() {



  return (
    
    <Router>
      <div>
      <Nav />
      <Switch>
      <Route exact path="/">
        <Hero/>
      </Route>
      <Route exact path="/projects">
        <Projects/>
      </Route>
      <Route exact path="/goals">
        <Goals/>
      </Route>
      {/* <Route exact path="/contact" component={Contact} /> */}
      <Route exact path="/whoami">
        <AboutMe/>
      </Route>
      </Switch>
      <Foot />
      </div>
    </Router>
    
  );
}

export default App;
