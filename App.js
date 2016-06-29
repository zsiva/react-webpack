import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comments/box';

class App extends React.Component {
    constructor(){
        super();
        this.data = [
          {id: 1, author: "Pete Hunt", text: "This is one comment test", date:'2015-12-12'},
          {id: 2, author: "Jordan Walke", text: "This is *another* comment", date:'2015-02-12'}
        ];
        this.update = this.update.bind(this)
    }
    update(e) {
    }
    render() {
        return (
            <CommentBox data={this.data} />
        )
    }
}

export default App
