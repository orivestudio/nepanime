/**
 * Created by romit on 7/25/16.
 * Romit Amgai <rtrromitamgai@gmail.com>
 * 7/25/16
 */

import React, {Component} from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.renderCategory = this.renderCategory.bind(this);
  }

  renderCategory(category, index) {
    return (
      <span key={index} className="category">{category}</span>
    );
  }

  render() {
    return (
      <div className="post">
        <div className="post-image">
          <img src={this.props.post.imageUrl} alt="post image"/>
        </div>
        <div
          className="categories">{this.props.post.categories && this.props.post.categories.length > 0 && this.props.post.categories.map((category, index)=>this.renderCategory(category, index)) || 'No Category'}</div>
        <div className="post-title">
          <h2>{this.props.post.title}</h2>
        </div>
        <div className="user-info">
          <img src={this.props.post.user && this.props.post.user.profilePictureUrl} alt="poster"/>
          <span>{this.props.post.user && this.props.post.user.name}</span>
        </div>
        <div className="post-end">
          <span>{this.props.post.date}</span>
          <span>{this.props.post.user && this.props.post.user.type}</span>
        </div>
      </div>
    );
  }
}

export default Post;