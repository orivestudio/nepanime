/**
 * Created by romit on 7/28/16.
 * Romit Amgai <rtrromitamgai@gmail.com>
 * 7/28/16
 */

import _ from 'lodash';

const initialState = {
  posts: {
    latestPosts: [{
      id: 1,
      imageUrl: 'img/post1.jpg',
      bannerUrl:'',
      categories: ['Anime', 'Post'],
      title: 'Why SAO is the Best and the worst thing ever',
      user: {
        name: 'Nepanime',
        profilePictureUrl: 'img/profilethumb.jpg',
        type: 'admin'
      },
      date: '2010-07-11',
      description: "Lorem ipsum dolor sit amet, \n consectetur adipiscing elit. Vivamus sodales, leo sed porttitor porttitor, elit augue dictum enim, et tincidunt erat nisl eu tortor. Etiam quis auctor felis, eu cursus ligula.In semper mi a neque feugiat, et ornare nulla sodales. Curabitur magna purus, fringilla non tincidunt egestas, sodales id massa.Fusce pulvinar interdum dolor blandit hendrerit. Nullam tristique rutrum leo, quis consequat arcu convallis quis. Duis tempor aliquet felis, vel luctus dui auctor non. Nullam pharetra nunc vitae nisi venenatis, eu consequat magna posuere. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ut ex nibh. Morbi quis lorem a mi eleifend laoreet.Pellentesque iaculis venenatis magna eget tincidunt. Curabitur ligula nunc, gravida sed mollis sit amet, placerat ac orci. Vestibulum tempus congue aliquam. Proin feugiat purus sit amet massa cursus, fermentum sagittis odio placerat. Phasellus auctor, dolor at tincidunt faucibus, nunc ipsum accumsan turpis, non imperdiet magna mi accumsan ligula. Sed condimentum rutrum dui tincidunt gravida. Etiam porttitor felis eu facilisis convallis. Aliquam eget augue venenatis, ultricies tellus eu, tincidunt nisi. Proin quis nisi in massa lobortis porta. Cras non tincidunt tellus, sit amet molestie risus. Sed at diam id odio convallis elementum non non lacus. Praesent posuere semper vestibulum. Aenean dictum, quam non mollis tincidunt, purus massa maximus nisl, a dignissim urna enim a dui. Nunc ac dignissim odio. Aenean volutpat elit eu mattis vulputate. Phasellus quis rutrum leo.Cras pharetra nunc sed neque accumsan consectetur. Fusce sit amet dolor a nunc iaculis bibendum quis ut nibh. Integer mollis, dolor et porta tempor, dui erat commodo velit, ut maximus justo magna eget justo. Phasellus maximus vel tellus ut luctus. Aenean laoreet pellentesque velit, vitae egestas dolor scelerisque id. Donec pellentesque tellus ligula, vel egestas nunc pulvinar in. Donec ac sollicitudin eros. Cras ut tortor lacus. Pellentesque bibendum mi eget ipsum pharetra euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \n \n Integer ultrices tristique quam, malesuada aliquet augue cursus id. Suspendisse potenti. Integer ac sollicitudin dui, nec fringilla orci. Mauris justo turpis, accumsan vitae diam in, vulputate pretium mauris. Suspendisse cursus convallis eros, id luctus nunc molestie ac. Vestibulum vitae magna ornare, maximus risus a, accumsan lectus.Integer condimentum, enim sit amet sodales vestibulum, est velit finibus augue, vitae suscipit purus tortor ut purus. Donec ornare eros at sem interdum tincidunt. Curabitur et sodales lacus. Quisque eu vestibulum mi. Etiam pharetra metus tellus, eget molestie quam semper sit amet. Donec id consectetur dolor, non mollis quam. Pellentesque mattis, tortor ut imperdiet bibendum, eros libero sollicitudin ipsum, quis mollis tellus metus in diam. Praesent non eros quis odio lacinia mollis. Vivamus at egestas augue, quis pharetra leo. Sed ac finibus est.Cras ac fringilla mi, a eleifend nisi. Ut egestas nibh nec odio dictum, vitae feugiat tortor efficitur. Quisque nunc justo, pulvinar sit amet orci at, accumsan maximus elit. Duis dictum massa at sagittis mollis. Quisque ut fermentum mauris. Pellentesque malesuada at velit eget iaculis. Donec leo justo, laoreet ut velit ac, sagittis rutrum lacus. In pharetra metus ipsum, sit amet commodo lorem rutrum at. Etiam sed pretium lorem."
    }, {
      id: 2,
      imageUrl: 'img/post2.jpg',
      bannerUrl:'',
      categories: ['Game', 'List'],
      title: 'Games of the century',
      user: {
        name: 'Nepanime',
        profilePictureUrl: 'img/profilethumb.jpg',
        type: 'staff'
      },
      date: '2010-07-12'
    }],
    popularPosts: [{
      id: 3,
      imageUrl: 'img/post2.jpg',
      bannerUrl:'',
      categories: ['Anime', 'Post'],
      title: 'Why SAO is the Best and the worst thing ever',
      user: {
        name: 'Nepanime',
        profilePictureUrl: 'img/profilethumb.jpg',
        type: 'admin'
      },
      date: '2010-07-11'
    }, {
      id: 4,
      imageUrl: 'img/post1.jpg',
      bannerUrl:'',
      categories: ['Game', 'List'],
      title: 'Games of the century',
      user: {
        name: 'Nepanime',
        profilePictureUrl: 'img/profilethumb.jpg',
        type: 'staff'
      },
      date: '2010-07-12'
    }],
    featuredPosts: [{
      id: 5,
      imageUrl: 'img/post2.jpg',
      bannerUrl:'',
      categories: ['Anime', 'Post'],
      title: 'Why SAO is the Best and the worst thing ever',
      user: {
        name: 'Nepanime',
        profilePictureUrl: 'img/profilethumb.jpg',
        type: 'admin'
      },
      date: '2010-07-11'
    }, {
      id: 6,
      imageUrl: 'img/post1.jpg',
      bannerUrl:'',
      categories: ['Game', 'List'],
      title: 'Games of the century',
      user: {
        name: 'Nepanime',
        profilePictureUrl: 'img/profilethumb.jpg',
        type: 'staff'
      },
      date: '2010-07-12'
    }]
  }
};

let crudReducer = (state = initialState, action)=> {
  let newState;

  switch (action.type) {
    case "getPostById":
      newState = _.cloneDeep(state);
      return newState;

    default:
      return state;
  }
};

export default crudReducer;

