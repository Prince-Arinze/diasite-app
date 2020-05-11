import React from 'react';
import './App.css';
import Home from "../src/pages/Home";
import Dashboard from "../src/pages/Dashboard";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Modal from './pages/Navigation/components/Login';
import MainDashboard from "../src/pages/MainDashboard";

function App() {
  return (
    <div>
 
     <Router>
         <Switch>
              <Route exact  path= "/" component={Home} />
              <Route exact path="/login" component={Modal} />
              <Route path="/super-admin" component={Dashboard} exact/>
              <Route path="/admin" component={MainDashboard} exact/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
