/**
 * Created by romit on 7/28/16.
 * Romit Amgai <rtrromitamgai@gmail.com>
 * 7/28/16
 */

//React dependencies
import React from 'react';

class PostPageMain extends React.Component {
  render() {
    return (
      <div className="page-content">
        {this.props.children}
      </div>
    );
  }
}

export default PostPageMain;
