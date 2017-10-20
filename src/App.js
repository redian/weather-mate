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
      loading: false,
      city: '',
      list: [],
      lat: '',
      lon: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.geolocationSearch = this.geolocationSearch.bind(this);
    this.weatherApiRequest = this.weatherApiRequest.bind(this);
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
    // Need to do that as github pages is on https and api.openweathermap.org is only available throught http 
    this.weatherApiRequest();
  }

  weatherApiRequest = () => {
    let query = `q=${this.state.city},uk`;
    if(this.state.city === ''){
      query = `lat=${this.state.lat}&lon=${this.state.lon}`;
    }
    const URL = `https://api.openweathermap.org/data/2.5/forecast?${query}&units=metric&appid=cc9fafbcb2f3ff46890ef19abaa2fe87`;
    fetch(URL)
    .then( response => response.json() )
    .then( (data) => {
      let processedList = [];
      for(let item of data.list) {
        const aDate = item.dt_txt.split(' ');
        if(!processedList[aDate[0]]){
          processedList[aDate[0]] = [];
        }
        processedList[aDate[0]].push({
          hour: aDate[1].substr(0,5),
          temp: item.main.temp,
          icon: `https://openweathermap.org/img/w/${item.weather[0].icon}.png`,
          description: item.weather[0].description,
        })
      }
      this.setState({
        list: processedList,
        city: data.city.name,
      });
      this.setState({ loading: false }); 
    });
  }

  geolocationSearch = () => {
    this.setState({ loading: true }); 
    /// Successful geolocation
    var success = function (position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      
      /// Update state with new API Data based on lat lon
      this.setState({
        lat: lat,
        lon: lon,
      });
      this.weatherApiRequest();
    }.bind(this);
  
    /// Error'd geolocation
    var error = function (error) {
      if (error.message === 'User denied Geolocation')
      {
        alert('Please enable location services');
      }
    };
    
    /// Get the position
    navigator.geolocation.getCurrentPosition(success, error);
  }

  render() {
    return (
      <div className="content">
        <Header />
        <SearchForm 
          {...this.state}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          handleClick={this.geolocationSearch}/>
        <Loader loading={this.state.loading}/>
        <DaysTable list={this.state.list}/>
      </div>
    );
  }
}

export default App;
