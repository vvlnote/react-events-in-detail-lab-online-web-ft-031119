// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  handleClick = (e) => {
    let coordinates = new Array();
    coordinates[0] = e.clientX;
    coordinates[1] = e.clientY;
<<<<<<< HEAD
    this.props.onReceiveCoordinates(coordinates);
=======
    return this.props.onReceiveCoordinates(coordinates);
>>>>>>> 5c9635aa91be4c6e9c24e96b9d48780f14859090
  }
    render() {
      return (
        <button onClick={this.handleClick}></button>
<<<<<<< HEAD
      );
=======
      )
>>>>>>> 5c9635aa91be4c6e9c24e96b9d48780f14859090
    }

}
