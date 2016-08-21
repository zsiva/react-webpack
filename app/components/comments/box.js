import React, {Component} from 'react';
import CommentList from './list';
import CommentForm from './comment-form';
import USER_DATA from '../user/user-data';
import COMMENTS_DATA from './comments-data';
import User from '../user/user';

class CommentBox extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            author:{}
        }
    }
    loadCommentsFromServer() {
        //TODO: get data from server
        this.setState({data: COMMENTS_DATA, author: USER_DATA});
   }
    componentDidMount() {
        this.loadCommentsFromServer();
    }
    render() {
        return (
            <div className="commentBox">
                <User user={this.state.author}/>

                <h4>Comments</h4>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        )
    }
}

export default CommentBox;
