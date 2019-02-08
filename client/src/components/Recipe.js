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
        // console.log(calories)
        // const servings= recipe.servings


        return (
            <div>
                <div><h2>{recipe.name}</h2></div>
                <img src={recipe.img} alt='recipe img' />
                <div>Calories/Serving: {recipe.calories/recipe.servings}</div>
                <div>Ingredients: {recipe.ingredients}</div>
                {/* <div>Calories/serving: {calPerServing}</div> */}
                <div>Servings: {recipe.servings}</div>
                <div><a target='_blank' rel="noopener noreferrer" href={recipe.instructions}>Instructions </a></div>
                <div><button onClick={() => this.deleteRecipe(recipe.id)}>Delete</button></div>
            </div>
        )
    }
}

