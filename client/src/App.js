import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react'

import Header from "./components/Header";
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Main from './pages/Main';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <Router>
      <ChakraProvider>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/leaderboard" component={Leaderboard}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
          </Switch>
        </div>
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

export default App;
