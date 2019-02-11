import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';
import { Grid, Image, Button, Icon } from 'semantic-ui-react';

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
        this.setState({ redirect: true })
        window.location.reload()
    }

    render() {

        const recipe = this.state.recipe

        const ingredientsStr = recipe.ingredients + ''

        const ingStrSplit = ingredientsStr.split(/,(?! )/)

        const ingredientsList = ingStrSplit.map((ingredient, i) => {
            return (
                <div style={{ padding: '0 0 15px 0' }} key={i}>{ingredient}</div>
            )
        })

        if(this.state.redirect) {
            return(<Redirect to={'/recipes'} />)
        }

        return (
            <Grid relaxed stackable>z
                <Grid.Row textAlign='center' >
                    <Grid.Column width={2}>
                        <Link to='/recipes'>
                            <Icon size='big' link name='arrow left' />
                        </Link>
                    </Grid.Column>

                    <Grid.Column width={12}>
                        <h2>{recipe.name}</h2>
                    </Grid.Column>

                    <Grid.Column width={2}>
                        <Button color='red' size='small' icon onClick={() => this.deleteRecipe(recipe.id)}>
                            <Icon name='trash alternate' size='large' />
                        </Button>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row divided centered>
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

                <Grid.Row divided centered style={{ height: '70vh', padding: '0 0 20px 0' }}>
                    <Grid.Column textAlign='left' stretched width={5}>
                        <h3>Ingredients:</h3>
                        {ingredientsList}
                    </Grid.Column>

                    <Grid.Column textAlign='center' width={5}>
                        <h3>Preparation</h3>
                        <a target='_blank' rel="noopener noreferrer" href={recipe.instructions}><h4>Instructions</h4></a>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        )
    }
}

