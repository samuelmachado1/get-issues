import React from 'react';
import { Router } from 'react-router-dom';


import Header from "./components/Header/index";
import TableModel from "./components/Table/index";
import Requests from "./components/Session/index";

import history from './services/history';
import { GlobalStyle } from './style';

const App = () =>  (
  
  <div className="App">
    <Router history={history}>
      <Header/>
      <header className="App-header">
        <Requests/>
      </header>
    </Router>
       
    </div>
);

export default App;
