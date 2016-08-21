import React, {Component} from 'react';

class CommentForm extends Component {
    constructor() {
        super();
        this.state = {
            author: '',
            text: ''
        }
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        var author = this.state.author.trim();
        var text = this.state.text.trim();

        // TODO: send request to the server
        this.setState({author: '', text: ''});
    }
    render() {
        return (
            <div>
                <form className="commentForm" >
                  <input type="text" placeholder="Your name"
                    value={this.state.author}
                    onChange={this.handleAuthor} />
                  <input type="text" placeholder="Say something..."
                    value={this.state.text}
                    onChange={this.handleText} />
                </form>
                <button onClick={this.handleSubmit}>Post</button>
            </div>
        );
      }
}

export default CommentForm;
