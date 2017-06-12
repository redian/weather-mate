import React, { Component } from 'react';
import Header from './components/Header';
import Loader from './components/Loader';
import SearchForm from './components/SearchForm';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      days: [],
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleInputChange = (value) => {
    this.setState({
      city: value
    });
  };
  
  render() {
    return (
      <div className="content">
        <Header />
        <SearchForm 
          {...this.state}
          handleInputChange={this.handleInputChange}/>
        <Loader />
      </div>
    );
  }
}

export default App;
