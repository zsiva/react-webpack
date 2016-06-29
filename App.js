import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comments/box';

class App extends React.Component {
    constructor(){
        super();
        this.update = this.update.bind(this)
    }
    update(e) {
    }
    render() {
        return (
            <CommentBox />
        )
    }
}

export default App
