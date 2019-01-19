import Recipe from "./Recipe"
import React, { Component } from 'react'

export default class RecipesList extends Component {
    render() {
        const recipes = this.props.recipes.map((recipe) => {
            return (
                <Recipe {...recipe} deleteRecipe={this.props.deleteRecipe} key={recipe.id} />
            )
        })
        return (
            <div>
                <h1>Recipes</h1>

                {this.props.recipes.length > 0 ? recipes : null}
            </div>
        )
    }
}

