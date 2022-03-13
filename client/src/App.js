import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { setContext } from '@apollo/client/link/context';

import Header from "./components/Header";
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Main from './pages/Main';
import Leaderboard from './pages/Leaderboard';
import { ApolloClient, ApolloProvider, createHttpLink, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
  uri: '/graphql',
})

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');
  return { 
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}`: '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ChakraProvider>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/leaderboard" component={Leaderboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
          </div>
          <Footer />
        </ChakraProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
