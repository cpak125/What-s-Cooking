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

    getRecipes = async () => {
        const response = await axios.get('/recipes')
        return response.data
    }

    deleteRecipe = async () => {
        const recipeId = this.props.match.params.id
        await axios.delete(`/recipes/${recipeId}`)
        window.location.reload()
    }


    render() {

        const recipe = this.state.recipe

        return (
            <div>
                <div><h2>{recipe.name}</h2></div>
                <img src={recipe.img} alt='recipe img' />
                <div>{recipe.ingredients}</div>
                <div>{recipe.cal_per_serving}</div>
                <div>{recipe.servings}</div>
                <div>{recipe.instructions}</div>
                <div><button onClick={() => this.deleteRecipe(recipe.id)}>Delete</button></div>
            </div>
        )
    }
}

