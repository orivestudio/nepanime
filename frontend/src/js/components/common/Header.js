/**
 * Created by romit on 7/15/16.
 * Romit Amgai <rtrromitamgai@gmail.com>
 * 7/15/16
 */

import React from 'react';
import {Link} from 'react-router';

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
    $('.button-collapse').sideNav();
  }

  toggleSearchBar() {
    this.state.displaySearchBar = !this.state.displaySearchBar;
    this.setState({displaySearchBar: this.state.displaySearchBar});
    if (this.state.displaySearchBar) {
      setTimeout(()=> {
        this.refs.search.focus();
      }, 100);
    }
  }

  render() {
    return (
      <div className='navbar-fixed cf'>
        <nav className='white' role='navigation'>
          <div className='nav-wrapper container'><Link to='/' id='logo-container' className='brand-logo'><img
            src='img/nepanime-logo.svg' alt='nepanime logo'/></Link>
            {<ul className='hide-on-med-and-down' style={{display:this.state.displaySearchBar?'none':'block'}}>
              <li><Link to='/'>News</Link></li>
              <li><Link to='/'>List</Link></li>
              <li><Link to='/'>About Us</Link></li>
              <li className='right'><a onClick={this.toggleSearchBar}><img src='img/search-icon.svg'
                                                                           alt='search icon'/></a></li>
            </ul>}
            <div className='search-bar'>
              {<form style={{display:this.state.displaySearchBar?'block':'none'}}>
                <div className='input-field'>
                  <input id='search' ref='search' type='search' placeholder='Search' autofocus
                         onBlur={this.toggleSearchBar} required/>
                  <i className='material-icons' onClick={this.toggleSearchBar}>close</i>
                </div>
              </form>}
            </div>

            <ul id='nav-mobile' className='side-nav'>
              <li><Link to='/'>News</Link></li>
              <li><Link to='/'>List</Link></li>
              <li><Link to='/'>About Us</Link></li>
            </ul>
            <a onClick={this.showSidebar} data-activates='nav-mobile' className='button-collapse burger'><i
              className='material-icons'>menu</i>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;