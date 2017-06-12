import React, { Component } from 'react';
import Header from './components/Header';
import Loader from './components/Loader';
import SearchForm from './components/SearchForm';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      city: '',
      list: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000); 
  }

  handleInputChange = (value) => {
    this.setState({
      city: value
    });
  }

  handleSubmit = (evt) => {
    this.setState({ loading: true });
    evt.preventDefault();
    const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},uk&appid=cc9fafbcb2f3ff46890ef19abaa2fe87`;
    fetch(URL)
    .then( response => response.json() )
    .then( (data) => {
      this.setState({list: data.list});
      setTimeout(() => this.setState({ loading: false }), 500); 
    });
  }

  render() {
    return (
      <div className="content">
        <Header />
        <SearchForm 
          {...this.state}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}/>
        <Loader loading={this.state.loading}/>
      </div>
    );
  }
}

export default App;
