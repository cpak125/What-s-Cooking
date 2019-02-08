import React, { Component } from 'react'
import SearchResult from './SearchResult';

export default class SearchResults extends Component {
    render() {
        const recipeResults = this.props.searchResults.map((recipe, i) => {
            return (

                <SearchResult
                    key={i}
                    name={recipe.recipe.label}
                    ingredients={recipe.recipe.ingredients.map(ingredient => ingredient.text).toString()}
                    servings={recipe.recipe.yield}
                    calories={Math.round(recipe.recipe.calories)}
                    instructions={recipe.recipe.url}
                    img={recipe.recipe.image}
                    addNewRecipe={this.props.addNewRecipe}
                    handleClose={this.props.handleClose}
                    toggleAddRecipe={this.props.toggleAddRecipe}
                />
            )
        })

        return (
            <div>
                {recipeResults}
            </div>
        )
    }
}
