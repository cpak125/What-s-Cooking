import React, { Component } from 'react'
// import {Link} from 'react-router-dom'

export default class SearchResults extends Component {
    render() {
        const recipeResults = this.props.searchResults.map((recipe, i) => {
            return (

                <div key={i}>
                    <div>{recipe.recipe.label}</div>
                    <img src={recipe.recipe.image} alt='recipe img' />
                </div>
            )
        })
        
        return (
            <div>
                {recipeResults}
            </div>
        )
    }
}
