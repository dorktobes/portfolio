import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  
  render() {
    return (
      <header>
      <a href="/">
        <span id="title">Dorktobes</span>
      </a>
        <nav>
          <a
            className={this.props.view === 'home' ? 'nav selected' : 'nav unselected'}
            onClick={this.props.onNavClick}
          >Home
            {this.props.view === 'home' && <span className="nav-underline" />}
          </a>
          <a
            className={this.props.view === 'blog' ? 'nav selected' : 'nav unselected'}
            onClick={this.props.onNavClick}
          >Blog
            {this.props.view === 'blog' && <span className="nav-underline" />}
          </a>
          <a
            className={this.props.view === 'portfolio' ? 'nav selected' : 'nav unselected'}
            onClick={this.props.onNavClick}
          >Portfolio
            {this.props.view === 'portfolio' && <span className="nav-underline" />}
          </a>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  view: PropTypes.string.isRequired,
};

export default Header;
