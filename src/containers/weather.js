import React, { Component } from 'react';
import { connect } from 'react-redux';

class Weather extends Component {
  render() {

    if(!this.props.weather) {
      return <div></div>;
    }
    var icon = this.props.weather.weather[0].icon;
    return (
      <div className='container'>
        <h3>City Name</h3>
        <div>
          <img src={`http://openweathermap.org/img/w/${icon}.png`} className='weather-img'/>
        </div>
        <div>
          <p>Temperature: {this.props.weather.main.temp}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(Weather);
