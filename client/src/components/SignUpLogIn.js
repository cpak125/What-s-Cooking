import React, { Component } from 'react'

export default class SignUpLogIn extends Component {
    state = {
        showLogin: true
    }

    toggleLogin = () => {
        this.setState({ showLogin: !this.state.showLogin })
    }
    // signUp = (event) => {
    //     event.preventDefault()
    //     this.props.signUp(
    //         this.state.email,
    //         this.state.password,
    //         this.state.password_confirmation
    //     )
    // }

    // signIn = (event) => {
    //     event.preventDefault()
    //     this.props.signIn(
    //         this.state.email,
    //         this.state.password
    //     )
    // }

    // handleChange = (event) => {
    //     const newState = { ...this.state }
    //     newState[event.target.name] = event.target.value
    //     this.setState(newState)
    // }
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
                <SignUp setUserSignedIn={this.props.setUserSignedIn} />
            </SignUpLogInWrapper>
        )
        return (
            <div>
                {this.state.showLogin ? login : signUp}
                {/* <form>
                    <div>
                        <label htmlFor="email">E-mail: </label>
                        <input onChange={this.handleChange} type="text" name="email" value={this.state.email} />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} type="password" name="password" value={this.state.password} />
                    </div>
                    <div>
                        <label htmlFor="password_confirmation">Confirm Password: </label>
                        <input onChange={this.handleChange} type="password" name="password_confirmation"
                            value={this.state.password_confirmation} />
                    </div>

                    <button onClick={this.signUp}>Sign Up</button>
                    <button onClick={this.signIn}>Log In</button>
                </form> */}
            </div>
        )
    }
}
