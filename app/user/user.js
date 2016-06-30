import React from 'react';

class ProfilePic extends React.Component {
    constructor() {
        super();
    }
    render(){
        return (
            <img src={this.props.imageUrl} style={{height: 100, width:100}} />
        );
    }
}

class ProfileName extends React.Component {
    constructor() {
        super();
    }
    render(){
        return (
            <div>{this.props.name}</div>
        );
    }
}

class ProfileLink extends React.Component {
    constructor() {
        super();
    }
    render(){
        return (
            <div>
                <a href={'https://www.github.com/' + this.props.username}>
                {this.props.username}
                </a>
            </div>
        );
    }
}

class User extends React.Component {
    constructor() {
        super();
    }
    render(){
        return (
            <div>
                <ProfilePic imageUrl={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.username} />
          </div>
        );
    }
}

export default User;
