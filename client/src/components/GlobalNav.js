import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const GlobalNavWrapper = styled.div`
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
  align-items: center;
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
`

const SessionButton = styled.button`
  border: none;
  padding: 10px 15px;
  border-radius: 5%;
  text-align: center;
  color: white;
  background-color: #4BA3C3;
  text-decoration: none;
  cursor: pointer;
`

export default class GlobalNav extends Component {
    render() {
        const signOutButton =
            <SessionButton onClick={this.props.signOut}><a>Sign Out</a></SessionButton>

        return (
            <GlobalNavWrapper>

                <GlobalNavLogoWrapper>
                    <div>
                        <GlobalNavLogo
                            src="https://cdn4.vectorstock.com/i/1000x1000/76/33/the-crossed-knives-icon-knife-and-chef-kitchen-vector-6607633.jpg"
                            alt="Secret Logo" />
                        <GlobalNavHeader>What's Cooking</GlobalNavHeader>
                    </div>
                </GlobalNavLogoWrapper>

                <SessionButtonWrapper>
                    {this.props.signedIn ? signOutButton : null}
                </SessionButtonWrapper>

            </GlobalNavWrapper>
        )
    }
}
