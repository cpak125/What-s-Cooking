import React, { Component } from 'react'
import axios from 'axios';
import { Grid, Image, Button } from 'semantic-ui-react';

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
            <Grid padded stackable>
                <Grid.Row centered>
                    <h2>{recipe.name}</h2>
                    <Button floated='right' color='red' size='mini' icon='trash alternate' onClick={() => this.deleteRecipe(recipe.id)}>Delete</Button>
                </Grid.Row>

                <Grid.Row centered>
                    <Grid.Column width={6}>
                        <Image centered src={recipe.img} alt='recipe img' />
                    </Grid.Column>

                    <Grid.Column verticalAlign="middle" width={3}>
                            <h3>{recipe.servings}</h3>
                            Servings
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle' width={3}>
                            <h3>{Math.round(recipe.calories / recipe.servings)}</h3>
                            Calories/Serving:
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row style={{height:'60vh'}}>
                    <Grid.Column floated='right' stretched width={10}>
                        <h3>Ingredients:</h3>
                        {ingredientsList}
                    </Grid.Column>

                    <Grid.Column textAlign='left' width={6}>
                        <h3>Preparation</h3>
                        <a target='_blank' rel="noopener noreferrer" href={recipe.instructions}><h4>Instructions</h4></a>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        )
    }
}

