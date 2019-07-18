import React, { Component } from 'react';
import { Router, Route, BrowserRouter } from "react-router-dom";

import Navbar from './components/navbar/navbar.component';
import Signup from './components/signup/signup.component';
import Signin from './components/sigin/sigin.component'
import UserList from './components/user/user.list.component';

import {
  ApolloProvider,
} from 'react-apollo';

import ApolloClient from 'apollo-boost'


const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql'
}
);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <>

          <BrowserRouter>
            <div>
              <Route path="/" component={Navbar}></Route>
              <Route path="/signup" component={Signup}></Route>
              <Route path="/signin" component={Signin}></Route>

            </div>

          </BrowserRouter>
        </>      </ApolloProvider>
    );
  }
}
//<Route path="/signin" component={Signup}></Route>
//        <UserList />

export default App;
/*
  <>

          <BrowserRouter>
            <div>
              <Route path="/" component={Navbar}></Route>

              <Route path="/signin" component={Signup}></Route>
            </div>

          </BrowserRouter>
        </>*/