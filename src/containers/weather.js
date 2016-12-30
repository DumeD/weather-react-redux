import React, { Component } from 'react';
import { connect } from 'react-redux';

class Weather extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(Weather);
