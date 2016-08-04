/**
 * Created by romit on 7/25/16.
 * Romit Amgai <rtrromitamgai@gmail.com>
 * 7/25/16
 */

import React, {Component} from 'react';

import moment from 'moment';

class Post extends Component {
  constructor(props) {
    super(props);
    this.renderCategory = this.renderCategory.bind(this);
  }

  renderCategory(category, index) {
    return (
      <p key={index} className="category">{category}</p>
    );
  }

  render() {
    return (
      <div className="post card hoverable" onClick={()=>{this.context.router.push('/posts/'+this.props.post.id)}}>
        <div className="card-image post-image">
          <img src={this.props.post.imageUrl} alt="post image"/>
        </div>
        <div className="card-stacked">
          <div
            className="categories">{this.props.post.categories && this.props.post.categories.length > 0 && this.props.post.categories.map((category, index)=>this.renderCategory(category, index)) || 'No Category'}</div>
          <div className="post-title">
            <p>{this.props.post.title}</p>
          </div>
          <div>
            <div className="user-info">
              <span>{this.props.post.user && this.props.post.user.name}</span>
            </div>
            <div className="post-end">
              <span className="create-date">{moment(this.props.post.date).format('MMM DD')}</span>
              <span>{this.props.post.user && this.props.post.user.type}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Post.contextTypes = {
  router: React.PropTypes.object
};

export default Post;