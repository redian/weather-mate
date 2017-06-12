import React, { Component } from 'react';
import Header from './components/Header';
import Loader from './components/Loader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <Loader />
      </div>
    );
  }
}

export default App;
