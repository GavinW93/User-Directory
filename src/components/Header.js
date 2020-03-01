import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>User Directory</h1>
        <p>Click the search bar to find the Employee.</p>
      </div>
    )
  }
}
