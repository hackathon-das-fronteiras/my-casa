import React, { Component } from 'react';
import './App.css';
import Router from './config/Router'
import Menu from './layout/Navbar'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Router />
      </div>
    );
  }
}

export default App;

