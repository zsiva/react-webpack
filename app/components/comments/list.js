import React, {Component} from 'react';
import Comment from './comment';

class CommentList extends Component{
    constructor() {
        super();
    }
    render() {
        var commentNodes = this.props.data.map(function(comment) {
                return (
                    <div key={comment.id}>
                        <Comment date={comment.date}>
                          {comment.comment}
                        </Comment>
                    </div>
                  );
                });
        return (
          <div className="commentList">
            {commentNodes}
          </div>
        );
    }
}

export default CommentList;
