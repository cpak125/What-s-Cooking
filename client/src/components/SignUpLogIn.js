import React, { Component } from 'react'
import styled from 'styled-components'
import SignUpLogInPlaceholder from './SignUpLogInPlaceholder';
import Login from './Login';
import SignUp from './SignUp';

const SignUpLogInWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    background: white;
    padding: 5% 10%;
`

export default class SignUpLogIn extends Component {
    state = {
        showLogin: true,
    }

    toggleLogin = () => {
        this.setState({ showLogin: !this.state.showLogin })
    }

    render() {
        const placeholder = (<SignUpLogInPlaceholder showLogin={this.state.showLogin} toggleLogin={this.toggleLogin} />)

        const login = (
            <SignUpLogInWrapper>
                <Login setUserSignedIn={this.props.setUserSignedIn} />
                {placeholder}
            </SignUpLogInWrapper>
        )

        const signUp = (
            <SignUpLogInWrapper>
                {placeholder}
                <SignUp  setUserSignedIn={this.props.setUserSignedIn} />
            </SignUpLogInWrapper>
        )
        return (
            <div>

                {this.state.showLogin ? login : signUp}
            </div>
        )
    }
}
