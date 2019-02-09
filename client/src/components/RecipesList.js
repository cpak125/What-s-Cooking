import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Menu, Icon, Grid, Header } from 'semantic-ui-react'
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
                <Grid.Column key={i}>
                    <Card link as={Link} to={`/recipes/${recipe.id}`} >
                        <Card.Header>{recipe.name}</Card.Header>
                        <Image src={recipe.img} alt='recipe img' />
                    </Card>
                </Grid.Column>
            )
        })
        return (
            <div>
                <h1>My Recipes</h1>
                <button onClick={this.toggleAddRecipe}>Add New Recipe</button>

                {this.state.addRecipe ?
                    <AddRecipe toggleAddRecipe={this.toggleAddRecipe}
                        addNewRecipe={this.props.addNewRecipe} />
                    : null}
                <Grid columns={5} padded doubling>
                    {recipes}
                </Grid>
            </div>
        )
    }
}

