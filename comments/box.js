import React from 'react';
import CommentList from './list';
import CommentForm from './comment-form';

class CommentBox extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    loadCommentsFromServer() {
        //simulate call
        this.data = [
          {id: 1, author: "Pete Hunt", text: "This is one comment test", date:'2015-12-12'},
          {id: 2, author: "Jordan Walke", text: "This is *another* comment", date:'2015-02-12'}
        ];
        this.setState({data: this.data});
   }
    componentDidMount() {
        this.loadCommentsFromServer();
    }
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        )
    }
}

export default CommentBox;
