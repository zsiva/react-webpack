import React from 'react';

class CommentForm extends React.Component {
    constructor() {
        super();
        this.state = {
            author: '',
            text: ''
        }
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleText.bind(this);
    }
    handleAuthor(e){
        this.setState({
            author: e.target.value
        })
    }
    handleText(e){
        this.setState({
            text: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
          return;
        }
        // TODO: send request to the server
        this.setState({author: '', text: ''});
    }
    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Your name"
                value={this.state.author}
                onChange={this.handleAuthor} />
              <input type="text" placeholder="Say something..."
                value={this.state.text}
                onChange={this.handleText} />
              <input type="submit" value="Post" />
            </form>
        );
      }
}

export default CommentForm;
