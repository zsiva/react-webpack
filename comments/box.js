import React from 'react';
import CommentList from './list';
import CommentForm from './comment-form';

class CommentBox extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>
        )
    }
}

export default CommentBox;
