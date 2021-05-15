import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import SearchBar from './components/SearchBar/search';


const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Switch>
        <Route path="/" exact component={SearchBar} />
        <Route path='/auth' exact component={Auth} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;

