import React, { Component } from 'react'
import axios from 'axios';

export default class AddRecipe extends Component {
    state = {
        searchQuery: '',
        searchResults: []
    }

    transferResult = (response) => {
        this.setState({ searchResults: response.data })
    }

    inputChangeHandler = (event) => {
        this.setState({ searchQuery: event.target.value })
    }

    searchButtonHandler = async () => {
        const response = await axios.get(`https://api.edamam.com/search?q=${this.state.searchQuery}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`)
        this.transferResult(response)
    }

    render() {
        return (
            <div>
                <h2>Search for a Recipe</h2>
                <input
                    value={this.state.searchQuery}
                    onChange={this.inputChangeHandler} A
                />
                <button onClick={this.searchButtonHandler}>Search</button>


            </div>
        )
    }
}
