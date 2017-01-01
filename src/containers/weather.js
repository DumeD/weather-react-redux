import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.convert = this.convert.bind(this);
  }
  convert(temp) {
    return _.round(temp - 273.15);
  }
  render() {

    if(!this.props.weather) {
      return <div></div>;
    }

    var icon = this.props.weather.weather[0].icon;

    return (
      <div className='container'>
        <h3>{this.props.weather.name}</h3>
        <div className='weather'>
          <p>{this.props.weather.weather[0].main}</p>
          <img src={`http://openweathermap.org/img/w/${icon}.png`} className='weather-img'/>
        </div>
        <div className='temperatures'>
          <p>Max: {this.convert(this.props.weather.main.temp_max)}° C</p>
          <p>Temperature: {this.convert(this.props.weather.main.temp)}° C</p>
          <p>Min: {this.convert(this.props.weather.main.temp_min)}° C</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(Weather);
