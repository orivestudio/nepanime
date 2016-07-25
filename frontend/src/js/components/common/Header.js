/**
 * Created by romit on 7/15/16.
 * Romit Amgai <rtrromitamgai@gmail.com>
 * 7/15/16
 */

import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.showSidebar = this.showSidebar.bind(this);
    this.toggleSearchBar = this.toggleSearchBar.bind(this);

    this.state = {
      displaySearchBar: false
    }
  }

  showSidebar() {
    $(".button-collapse").sideNav();
  }

  toggleSearchBar() {
    this.state.displaySearchBar = !this.state.displaySearchBar;
    this.setState({displaySearchBar: this.state.displaySearchBar});
    if (this.state.displaySearchBar) {
      console.log(this.refs);
      setTimeout(()=> {
        this.refs.search.focus()
      }, 100);
    }
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="white" role="navigation">
          <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo"><img
            src="img/nepanime-logo.svg" alt="nepanime logo"/></a>
            {<ul className="left hide-on-med-and-down" style={{display:this.state.displaySearchBar?'none':'block'}}>
              <li><a href="#">News</a></li>
              <li><a href="#">List</a></li>
              <li><a href="#">About Us</a></li>
              <li className="right"><a onClick={this.toggleSearchBar}><img src="img/search-icon.svg"
                                                                           alt="search icon"/></a></li>
            </ul>}
            <div className="search-bar">
              {<form style={{display:this.state.displaySearchBar?'block':'none'}}>
                <div className="input-field">
                  <input id="search" ref="search" type="search" autofocus onBlur={this.toggleSearchBar} required/>
                  <i className="material-icons" onClick={this.toggleSearchBar}>close</i>
                </div>
              </form>}
            </div>

            <ul id="nav-mobile" className="side-nav">
              <li><a href="#">News</a></li>
              <li><a href="#">List</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
            <a onClick={this.showSidebar} data-activates="nav-mobile" className="button-collapse"><i
              className="material-icons">menu</i>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;