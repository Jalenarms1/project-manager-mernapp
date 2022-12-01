import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import "./App.css";
import Auth from "./utils/auth";
import { Nav } from 'react-bootstrap';
import { UserProvider } from './context/userContext';
import UserPage from './pages/UserPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';



const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  document.body.style.backgroundImage = "linear-gradient(29deg, rgba(2,6,15,1) 0%, rgba(23,54,121,1) 74%)";

  return (
    <ApolloProvider client={client}>
      <UserProvider>
        
        <Router>
          <Nav className=' w-100'>
            <Navbar />
          </Nav>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/user' element={<UserPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
          
        </Router>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
