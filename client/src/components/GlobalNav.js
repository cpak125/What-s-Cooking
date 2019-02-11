import React, { Component } from 'react'
import { clearAuthTokens } from '../util/SessionHeaderUtil'
import axios from 'axios'
import styled from 'styled-components'

const GlobalNavWrapper = styled.div`
  width:100%;
  height:auto; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 18px;
  box-shadow: 0 4px 10px -2px lightgray;
  margin-bottom: 35px;
  background-color: #175676;

`

const GlobalNavLogoWrapper = styled.div`
  display: flex;
`

const GlobalNavLogo = styled.img`
  height: 30px;
  border-radius: 10%;
`

const GlobalNavHeader = styled.span`
  margin-left: 15px;
  text-align: center;
  font-size: 30px;
  color: white;
  font-family: 'Oswald', sans-serif;
`

const SessionButtonWrapper = styled.div`
display:flex;
flex-wrap:wrap;
`

const SessionButton = styled.button`
  border: none;
  padding: 10px 15px;
  margin-left: 10px;
  border-radius: 5%;
  text-align: center;
  color: white;
  background-color: #4BA3C3;
  text-decoration: none;
  cursor: pointer;
`

export default class GlobalNav extends Component {

    signOut = async (event) => {

        try {
            event.preventDefault()
            await axios.delete('/auth/sign_out')

            clearAuthTokens();

            this.props.signOut()
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const email = localStorage.getItem('uid')

        const signOutButton =
            <SessionButton onClick={this.signOut}> Sign Out</SessionButton>

        return (
            <GlobalNavWrapper>

                <GlobalNavLogoWrapper>
                    <div>
                        <GlobalNavLogo
                            src="../img/whats_cooking_logo.jpg"
                            alt="Knife Logo" />
                        <GlobalNavHeader>What's Cooking</GlobalNavHeader>
                    </div>
                </GlobalNavLogoWrapper>

                <SessionButtonWrapper>
                    {email}
                    {this.props.signedIn ? signOutButton : null}
                </SessionButtonWrapper>

            </GlobalNavWrapper>
        )
    }
}
