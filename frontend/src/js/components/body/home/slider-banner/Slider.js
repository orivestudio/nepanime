/**
 * Created by romit on 7/15/16.
 * Romit Amgai <rtrromitamgai@gmail.com>
 * 7/15/16
 */

//React dependencies
import React from 'react';

import moment from 'moment';

class Slider extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="slider-banner">
        <img className="responsive-img" src={this.props.imageUrl || 'img/defaultbanner.jpg'} alt="slider-banner"/>
        {this.props.postInfo && <div className="post-info">
          <h4>{this.props.postInfo.title}</h4>
          <span className="banner-user-info">{this.props.postInfo.user.name}</span>
          <span className="posted-at">{moment(this.props.postInfo.date).format('MMM DD')}</span>
        </div>}
      </div>
    );
  }
}

export default Slider;