import React from 'react';
import Comment from './comment';

class CommentList extends React.Component{
    constructor() {
        super();
    }
    render() {
        var commentNodes = this.props.data.map(function(comment) {
                return (
                    <Comment author={comment.author} key={comment.id} date={comment.date}>
                      {comment.text}
                    </Comment>
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
