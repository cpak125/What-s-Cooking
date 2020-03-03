import React, { Component } from 'react'
import styled from 'styled-components'
import { saveAuthTokens } from '../util/SessionHeaderUtil'
import axios from 'axios'
import FlashError from './FlashError';


const SignUpLogInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 50vw;
  z-index: 40vw;
`

const SignUpInput = styled.input`
  padding: 0px 10px;
  height: 30px;
  margin-bottom: 15px;
  border-radius: 2px;
  border: 1px solid lightgray;
  width: 40vw;
`

const SignUpFormWrapper = styled.div`
  width: 40vw;
`

const SignUpButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`

const SignUpButton = styled.button`
  border: none;
  margin: 0px 6px;
  padding: 10px 15px;
  border-radius: 5%;
  text-align: center;
  color: white;
  background-color: #BA324F;
  text-decoration: none;
  cursor: pointer;
  `

export default class SignUp extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: '',
    error: ''
  }

  handleChange = (event) => {
    const newState = { ...this.state }
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  signUp = async () => {
    try {

      const payload = {
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation
      }

      const response = await axios.post('/auth', payload)

      saveAuthTokens(response.headers)

      this.props.setUserSignedIn()

    } catch (error) {
      let errorMessage = ''
      if (error.response.status === 422) {
        errorMessage = 'Invaild email and/or passwords do not match'
      }
      this.setState({ error: errorMessage })
    }
  }

  dismissError = () => {
    this.setState({ error: '' })
  }

  render() {
    return (
      <div>
        <SignUpLogInWrapper>
          <h1>Sign Up</h1>
          <SignUpFormWrapper>
            <form>
              <div>
                <SignUpInput onChange={this.handleChange}
                  type="text"
                  name="email"
                  placeholder="email"
                  value={this.state.email} />
              </div>
              <div>
                <SignUpInput onChange={this.handleChange}
                  type="password"
                  name="password"
                  placeholder="password(min. 6 characters)"
                  value={this.state.password} />
              </div>
              <div>
                <SignUpInput onChange={this.handleChange}
                  type="password"
                  name="password_confirmation"
                  placeholder="confirm password"
                  value={this.state.password_confirmation} />
              </div>
            </form>
          </SignUpFormWrapper>
          <SignUpButtonWrapper>
            <SignUpButton onClick={this.signUp}>Sign Up</SignUpButton>
          </SignUpButtonWrapper>
        </SignUpLogInWrapper>

        {this.state.error ? <FlashError error={this.state.error} dismissError={this.dismissError} /> : null}

      </div>
    )
  }
}
