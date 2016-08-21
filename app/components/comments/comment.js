import React, {Component} from 'react';

class Comment extends Component {
    constructor() {
        super();
    }
    render(){
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                   {this.props.author}
                </h2>
                {this.props.children}<br />
                <small>{this.props.date}</small>
                <hr />
          </div>
        );
    }
}

export default Comment;
