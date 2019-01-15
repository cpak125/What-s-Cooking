import React from 'react'
import Recipe from "./Recipe"


const RecipesList = (props) => {

    const recipes = props.recipes.map((post) => {
        return (
            <Recipe {...post} deletePost={props.deletePost} key={post.id}/>
        )
    })
    return (
        <div>
            <h1>Recipes</h1>

            {props.recipes.length > 0 ? recipes : null}
        </div>
    )
}

export default RecipesList