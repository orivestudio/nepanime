/**
 * Created by romit on 7/28/16.
 * Romit Amgai <rtrromitamgai@gmail.com>
 * 7/28/16
 */

let crudActions = {
  getLatestPosts(){
    return {
      type: "getLatestPosts"
    }
  },

  getPopularPosts(){
    return {
      type: "getPopularPosts"
    }
  },

  getPostById(id){
    return {
      type: "getPostById",
      id: id
    }
  },

  getFeaturedPosts(){
    return {
      type: "getFeaturedPosts"
    }
  }
};

export default crudActions;