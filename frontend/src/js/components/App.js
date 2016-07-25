//React dependencies
import React, {Component} from 'react';

//component
import Header from './common/Header';

export default class App extends Component {
  render() {
    return (
        <div className="page-container">
          <Header/>
          <div className="container">
            {this.props.children}
          </div>
        </div>
    );
  }
}