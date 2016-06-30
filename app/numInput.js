import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            red: 0
        }
        this.update = this.update.bind(this)
    }
    update(e) {
        this.setState({
            red: this.refs.red.refs.inp.value
        })
    }
    render() {
        return (
            <div>
                <NumInput ref="red"
                label="Red"
                min={0}
                max={255}
                step={1}
                val={+this.state.red}
                type="number"
                update={this.update} />
            </div>
        )
    }
}
 class NumInput extends React.Component {
     render() {
         let label =  this.props.label !== '' ?
            <label>{this.props.label} - {this.props.val}</label> :'';
         return (
            <div>
             <input ref="inp"
             type={this.props.type}
             min={this.props.min}
             max={this.props.max}
             defaultValue={this.props.val}
             onChange={this.props.update} />
             {label}
             </div>
         );
     }
 }

NumInput.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number,
    step: React.PropTypes.number,
    label: React.PropTypes.string,
    update: React.PropTypes.func.isRequired,
    type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
    min: 0,
    max: 0,
    value: 0,
    label: '',
    step: 1,
    type: 'range'
}

export default App
