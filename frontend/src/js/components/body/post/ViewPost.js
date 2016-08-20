/**
 * Created by romit on 7/28/16.
 * Romit Amgai <rtrromitamgai@gmail.com>
 * 7/28/16
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import showdown from 'showdown';

//Components
import Slider from '../home/slider-banner/Slider';

class ViewPost extends Component {
  constructor(props) {
    super(props);
    this.renderText = this.renderText.bind(this);
    this.state = {
      selectedPost: null
    }
  }

  componentWillMount() {
    for (let latestPost of this.props.latestPosts) {
      if (this.props.params.id == latestPost.id) {
        this.state.selectedPost = latestPost;
        this.setState({selectedPost: this.state.selectedPost});
        return;
      }
    }
    for (let popularPost of this.props.popularPosts) {
      if (this.props.params.id == popularPost.id) {
        this.state.selectedPost = popularPost;
        this.setState({selectedPost: this.state.selectedPost});
      }
    }
  }

  renderText(text) {
    return new showdown.Converter().makeHtml(text);
  }

  render() {
    let description = this.state.selectedPost && this.state.selectedPost.description;
    return (
      <div className="row">
        <Slider imageUrl={this.state.selectedPost && this.state.selectedPost.bannerUrl}
                postInfo={this.state.selectedPost}/>
        <div className="col s12 m12 l7">
          <div className="flow-text post-text" dangerouslySetInnerHTML={{__html:this.renderText(description)}}/>
        </div>
        <div className="col l4 right .hide-on-med-and-down">
          <div className="featured-post">
            <div className="featured-post-title">
              <span className="orange-border"></span>
              <span className="black-border"></span>
              <span className="title">Featured Posts</span>
            </div>
            <div className="card">
              <div className="card-image">
                <img src="img/post1.jpg"/>
              </div>
              <div className="card-content">
                <p>Some Lorem ipsum goes here and it will be a long text of featured post.</p>
                <div className="post-end"><span className="create-date">27 August, 2015</span><span>admin</span></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = function (state) {
  return {
    latestPosts: state.crudReducer.posts.latestPosts,
    popularPosts: state.crudReducer.posts.popularPosts,
    featuredPosts: state.crudReducer.posts.featuredPosts
  }
};

export default connect(mapStateToProps)(ViewPost);