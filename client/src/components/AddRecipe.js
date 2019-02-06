import React, { Component } from 'react'
import axios from 'axios';
import SearchResults from './SearchResults';

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

    render() {
        return (
            <div>
                <h2>Search for a Recipe</h2>
                <input
                    value={this.state.searchQuery}
                    onChange={this.inputChangeHandler}
                />
                <button onClick={this.searchButtonHandler}>Search</button>
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
