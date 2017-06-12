import React, { Component } from 'react';
import Header from './components/Header';
import Loader from './components/Loader';
import SearchForm from './components/SearchForm';
import DaysTable from './components/DaysTable';

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
    //const URL = '/data.json';
    // Need to do that as github pages is on https and 
    const URL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},uk&units=metric&appid=cc9fafbcb2f3ff46890ef19abaa2fe87`;
    fetch(URL)
    .then( response => response.json() )
    .then( (data) => {
      const processedList = [];
      for(let item of data.list) {
        const aDate = item.dt_txt.split(' ');
        if(!processedList[aDate[0]]){
          processedList[aDate[0]] = [];
        }
        processedList[aDate[0]].push({
          hour: aDate[1].substr(0,5),
          temp: item.main.temp,
          icon: `https://cors-anywhere.herokuapp.com/http://openweathermap.org/img/w/${item.weather[0].icon}.png`,
          description: item.weather[0].description,
        })
      }
      this.setState({list: processedList});
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
        <DaysTable list={this.state.list}/>
      </div>
    );
  }
}

export default App;
