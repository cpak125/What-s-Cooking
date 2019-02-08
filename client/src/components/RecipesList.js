import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddRecipe from './AddRecipe';

export default class RecipesList extends Component {
    state = {
        addRecipe: false
    }

    toggleAddRecipe = () => {
        this.setState({ addRecipe: !this.state.addRecipe })
    }

    render() {
        const recipes = this.props.recipes.map((recipe, i) => {
            return (
                <div key={i}>
                    <Link to={`/recipes/${recipe.id}`} >
                        <h2>{recipe.name}</h2>
                        <img src={recipe.img} alt='recipe img' />
                    </Link>
                </div>
            )
        })
        return (
            <div>
                <h1>Recipes</h1>
                <button onClick={this.toggleAddRecipe}>Add New Recipe</button>

                {this.state.addRecipe ? 
                    <AddRecipe toggleAddRecipe={this.toggleAddRecipe}
                    addNewRecipe={this.props.addNewRecipe} />
                    : null}

                {recipes}
            </div>
        )
    }
}

