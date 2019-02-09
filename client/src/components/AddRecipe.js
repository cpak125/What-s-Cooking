import React, { Component } from 'react'
import axios from 'axios';
import SearchResults from './SearchResults';
import { Input, Button, Icon } from 'semantic-ui-react';

export default class AddRecipe extends Component {
    state = {
        searchQuery: '',
        searchResults: []
    }

    transferResult = (response) => {
        this.setState({ searchResults: response.data.hits })
    }

    inputChangeHandler = (event) => {
        this.setState({ searchQuery: event.target.value })
    }

    searchButtonHandler = async () => {
        const response = await axios.get(`https://api.edamam.com/search?q=${this.state.searchQuery}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=25`)
        this.transferResult(response)
    }

    handleClose = () => this.setState({
        searchQuery: '',
        searchResults: []
    })

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.searchButtonHandler()
        }
    }

    render() {
        return (
            <div>
                <Input
                    type='text'
                    focus
                    style={{width:'50vw'}}
                    placeholder='Search for a Recipe...'
                    value={this.state.searchQuery}
                    onChange={this.inputChangeHandler}
                    onKeyPress={this.handleKeyPress}
                >
                <input/>
                    <Button icon onClick={this.searchButtonHandler}>
                        <Icon name='search' />
                    </Button>
                </Input>

                <SearchResults
                    searchResults={this.state.searchResults}
                    addNewRecipe={this.props.addNewRecipe}
                    handleClose={this.handleClose}
                    toggleAddRecipe={this.props.toggleAddRecipe}
                />


            </div>
        )
    }
}
