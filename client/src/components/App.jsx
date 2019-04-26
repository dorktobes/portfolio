import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
    };
    this.onNavClick = this.onNavClick.bind(this);
  }

  onNavClick(e) {
    this.setState({
      view: e.target.innerText.toLowerCase(),
    });
  }

  render() {
    return (
      <div>
        <Header onNavClick={this.onNavClick} view={this.state.view} />
      </div>
    );
  }
}

export default App;
