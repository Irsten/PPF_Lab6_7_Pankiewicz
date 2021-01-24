/* eslint-disable no-unused-vars */
import "./App.css"
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Footer from "./components/Footer"
import COuter from './components/COuter'
import Header from "./components/Header"
import Home from "./components/Home"
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <COuter />
          <Footer />
        </div>
      </Router>
    )
  }
}
export default App;