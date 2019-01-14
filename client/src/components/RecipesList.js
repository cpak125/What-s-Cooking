import React, { Component } from 'react'
import Recipe from "./Recipe"

const RecipeContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `
export default class RecipesList extends Component {
    render() {
        const RecipesList = (props) => {
            const recipes = props.recipes.map((recipe) => {
                return (
                    <Recipe {...recipe} deleteRecipe={props.deleteRecipe} key={recipe.id} />
                )
            })
        }
        return (
            <RecipeContainerWrapper>
                <h1>Recipes</h1>

                {props.recipes.length > 0 ? recipes : null}

            </RecipeContainerWrapper>
        )
    }
}
