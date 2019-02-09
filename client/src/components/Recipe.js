import React, { Component } from 'react'
import axios from 'axios';

export default class Recipe extends Component {
    state = {
        recipe: {},
        redirect: false
    }

    componentDidMount = async () => {
        const recipeResponse = await this.getRecipe()

        this.setState({
            recipe: recipeResponse.data
        })
    }

    getRecipe = async () => {
        const recipeId = this.props.match.params.id
        return await axios.get(`/recipes/${recipeId}`)
    }

    deleteRecipe = async () => {
        const recipeId = this.props.match.params.id
        await axios.delete(`/recipes/${recipeId}`)
        window.location.reload()
    }

    render() {

        const recipe = this.state.recipe

        const ingredientsStr = recipe.ingredients + ''

        const ingStrSplit = ingredientsStr.split(/,(?! )/)

        const ingredientsList = ingStrSplit.map((ingredient, i) => {
            return (
                <div key={i}>{ingredient}</div>
            )
        })

        return (
            <div>
                <div><h2>{recipe.name}</h2></div>
                <img src={recipe.img} alt='recipe img' />
                <div><h3>Servings:</h3> {recipe.servings}</div>
                <div><h3>Calories/Serving:</h3> {Math.round(recipe.calories / recipe.servings)}</div>
                <div> <h3>Ingredients:</h3>
                    {ingredientsList}
                </div>
                <div><a target='_blank' rel="noopener noreferrer" href={recipe.instructions}><h3>Instructions</h3> </a></div>
                <div><button onClick={() => this.deleteRecipe(recipe.id)}>Delete</button></div>
            </div>
        )
    }
}

