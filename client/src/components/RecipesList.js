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
                // <Recipe {...recipe} deleteRecipe={this.props.deleteRecipe} key={recipe.id} />
                <div key={i}>
                    <Link to={`/recipes/:id`} {...recipe}>
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

                {this.state.addRecipe ? <AddRecipe addNewRecipe={this.props.addNewRecipe} /> : null}
                {this.props.recipes.length > 0 ? recipes : null}
            </div>
        )
    }
}

