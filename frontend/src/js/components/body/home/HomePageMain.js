/**
 * Created by romit on 7/25/16.
 * Romit Amgai <rtrromitamgai@gmail.com>
 * 7/25/16
 */

import React, {Component} from 'react';

//Components
import Slider from './slider-banner/Slider';
import Post from './Post';

let latestPosts = [{
  id: 1,
  imageUrl: 'img/post1.jpg',
  categories: ['Anime', 'Post'],
  title: 'Why SAO is the Best and the worst thing ever',
  user: {
    name: 'Nepanime',
    profilePictureUrl: 'img/profilethumb.jpg',
    type: 'admin'
  },
  date: '2010-07-11'
}, {
  id: 2,
  imageUrl: 'img/post2.jpg',
  categories: ['Game', 'List'],
  title: 'Games of the century',
  user: {
    name: 'Nepanime',
    profilePictureUrl: 'img/profilethumb.jpg',
    type: 'staff'
  },
  date: '2010-07-12'
}];

let popularPosts = [{
  id: 1,
  imageUrl: 'img/post2.jpg',
  categories: ['Anime', 'Post'],
  title: 'Why SAO is the Best and the worst thing ever',
  user: {
    name: 'Nepanime',
    profilePictureUrl: 'img/profilethumb.jpg',
    type: 'admin'
  },
  date: '2010-07-11'
}, {
  id: 2,
  imageUrl: 'img/post1.jpg',
  categories: ['Game', 'List'],
  title: 'Games of the century',
  user: {
    name: 'Nepanime',
    profilePictureUrl: 'img/profilethumb.jpg',
    type: 'staff'
  },
  date: '2010-07-12'
}];

class HomePageMain extends Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);

    this.state = {
      latest: true,
      posts: latestPosts
    };
  }

  selectLatest(e) {
    e.preventDefault();
    this.state.latest = true;
    this.setState({latest: this.state.latest, posts: latestPosts});
  }

  selectPopular(e) {
    e.preventDefault();
    this.state.latest = false;
    this.setState({latest: this.state.latest, posts: popularPosts});
  }

  renderPost(post, index) {
    return (
      <Post key={index} post={post}/>
    );
  }

  render() {
    return (
      <div className="row">
        <Slider/>
        <div className="col s12 m12 l8">
          <div className="post-types">
            <a onClick={this.selectLatest.bind(this)} className={this.state.latest?'selected':''}>Latest</a>
            <a onClick={this.selectPopular.bind(this)} className={!this.state.latest?'selected':''}>Popular</a>
          </div>
          {this.state.posts && this.state.posts.length > 0 && this.state.posts.map((post, index)=>this.renderPost(post, index))}
        </div>
      </div>
    );
  }
}

export default HomePageMain;