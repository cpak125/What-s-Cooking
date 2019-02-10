import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Grid} from 'semantic-ui-react'
import AddRecipe from './AddRecipe';

export default class RecipesList extends Component {

    render() {
        const recipes = this.props.recipes.map((recipe, i) => {
            return (
                <Grid.Column key={i}>
                    <Card link as={Link} to={`/recipes/${recipe.id}`} >
                        <Card.Content>
                            <Card.Header>{recipe.name}</Card.Header>
                            <Image src={recipe.img} alt='recipe img' />
                            <Card.Description>{Math.round(recipe.calories/recipe.servings)} Calories | {recipe.servings} Servings</Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            )
        })
        return (
            <div>
                <h1>My Recipes</h1>


                <AddRecipe addNewRecipe={this.props.addNewRecipe} />

                <Grid columns={5} padded doubling>
                    {recipes}
                </Grid>
            </div>
        )
    }
}

