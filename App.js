import React from 'react';

class App extends React.Component {
    render() {
        return <h1>{this.props.txt} </h1>
    }
}

App.propTypes = {
    txt: React.PropTypes.string
}
export default App
