/**
 * Created by romit on 7/25/16.
 * Romit Amgai <rtrromitamgai@gmail.com>
 * 7/25/16
 */

import React, {Component} from 'react';

//Components
import Slider from './slider-banner/Slider';
import Post from './Post';

let posts = [{
  imageUrl: '',
  categories: ['Anime', 'Post'],
  title: 'Why SAO is the Best and the worst thing ever',
  user: {
    name: 'Nepanime',
    profilePictureUrl: '',
    type: 'admin'
  },
  date: '2010-07-11'
}, {
  imageUrl: '',
  categories: ['Game', 'List'],
  title: 'Games of the century',
  user: {
    name: 'Nepanime',
    profilePictureUrl: '',
    type: 'staff'
  },
  date: '2010-07-12'
}];

class HomePageMain extends Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
  }

  renderPost(post, index) {
    return (
      <Post key={index} post={post}/>
    );
  }

  render() {
    return (
      <div className="body-container">
        <Slider/>
        <div className="posts">
          {posts && posts.length > 0 && posts.map((post, index)=>this.renderPost(post, index))}
        </div>
      </div>
    );
  }
}

export default HomePageMain;