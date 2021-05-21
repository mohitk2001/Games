import React from 'react'
import Box from './Component/Box'
import "./index.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Header from "./Header"
import Home from "./Home"
function App() {
  return (
    <>
    <Router>
    <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/tic-tac-toe" component={Box} />
      </Switch>
    </Router>
      
    </>
  )
}

export default App
