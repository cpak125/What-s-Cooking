import React, { Component } from 'react'
import styled, {keyframes, ThemeProvider} from 'styled-components'
import { shake } from 'react-animations'

const shakeAnimation = keyframes`${shake}`

const FlashErrorContainer = styled.div`
    display: flex;
    padding: 7px;
    justify-content: ${props => props.theme.justifyContent};
    align-items: center;
    border-radius: 5px;
    color: #e24626;
    box-shadow: 2px 2px 10px lightgray;
    background: white;
    margin-top: 35px;
    animation: 0.08s ${shakeAnimation};
`

const FlashErrorDismissButton = styled.button`
       padding-left: 7px;
    color: #e24626;
    border: none;
    background: white;
    font-size: 15px;
    
    &:focus {
        outline: none;
    }
`

const theme = {
    justifyContent: 'center'
}

export default class FlashError extends Component {
  render() {
    return (
        <ThemeProvider theme={theme}>
        <FlashErrorContainer>
            <div>{this.props.error}</div>
            <div>
                <FlashErrorDismissButton onClick={this.props.dismissError}><i className="fa fa-times-circle" aria-hidden="true"></i></FlashErrorDismissButton>
            </div>
        </FlashErrorContainer>
    </ThemeProvider>
    )
  }
}
