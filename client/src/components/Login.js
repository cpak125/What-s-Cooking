import React, { Component } from 'react'
import styled from 'styled-components'
import { saveAuthTokens } from '../util/SessionHeaderUtil'
import axios from 'axios'
import FlashError from './FlashError';


const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 50vw;
  z-index: 3;
`

const LoginInputWrapper = styled.div`
`

const LoginInput = styled.input`
  padding: 0px 10px;
  height: 30px;
  margin-bottom: 15px;
  border-radius: 2px;
  border: 1px solid lightgray;
  width: 70%;
`

const LoginFormWrapper = styled.div`
  width: 40vw;
`

const LoginButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`

const LoginButton = styled.button`
  border: none;
  padding: 10px 15px;
  border-radius: 5%;
  text-align: center;
  color: white;
  background-color: #BA324F;
  text-decoration: none;
  cursor: pointer;
`
export default class Login extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  handleChange = (event) => {
    const newState = { ...this.state }
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  signIn = async () => {
    try {
      const payload = {
        email: this.state.email,
        password: this.state.password
      }
      const response = await axios.post('/auth/sign_in', payload)
      saveAuthTokens(response.headers)

      this.props.setUserSignedIn()

    } catch (error) {
      let errorMessage = ''
      if (error.response.status === 401) {
        errorMessage = "Invalid email and/or password"
      }
      this.setState({ error: errorMessage })
    }
  }

  dismissError = () => {
    this.setState({error: ''})
}

  render() {
    return (
      
        <LoginWrapper>
          <h1>Log In</h1>
          <LoginFormWrapper>
            <form>
              <LoginInputWrapper>
                <LoginInput onChange={this.handleChange}
                  type="text"
                  name="email"
                  placeholder="email"
                  value={this.state.email} />
              </LoginInputWrapper>
              <LoginInputWrapper>
                <LoginInput onChange={this.handleChange}
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password} />
              </LoginInputWrapper>
            </form>
          </LoginFormWrapper>
          <LoginButtonWrapper>
            <LoginButton onClick={this.signIn}>Log In</LoginButton>
          </LoginButtonWrapper>
          {this.state.error ? <FlashError error={this.state.error} dismissError={this.dismissError} /> : null}

        </LoginWrapper>
        

      
    )
  }
}
