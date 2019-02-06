import React, { Component } from 'react'
import axios from 'axios';

export default class Recipe extends Component {
    state = {
        recipe: {}
    }
    async componentDidMount() {
        const recipeResponse = await this.fetchRecipe()

        this.setState({
            recipe: recipeResponse.data
        })
    }

    fetchRecipe = async () => {
        const recipeId = this.props.match.params.id
        return await axios.get(`/recipes/${recipeId}`)
    }

    render() {
        const deleteRecipe = () => {
            this.props.deleteRecipe()
        }

        const recipe=this.state.recipe

        return (
            <div>
                <img src={recipe.img} alt='recipe img' />
                <div><h2>{this.props.name}</h2></div>
                <div>{this.props.ingredients}</div>
                <div>{this.props.cal_per_serving}</div>
                <div>{this.props.servings}</div>
                <div>{this.props.instructions}</div>
                <div><button onClick={deleteRecipe}>Delete</button></div>
            </div>
        )
    }
}

