import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

//引入组件
import Login from './pages/Login'
import Home from "./pages/Home"


function App() {
  return (
    <Router>
      <div className="App">
         <div>
        <Route path="/" render={() => <Redirect to={"/login"} />}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/home" component={Home}></Route>
        </div>
      </div>
    </Router>

  );
}

export default App;
