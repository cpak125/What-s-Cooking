import Recipe from "./Recipe"
import React, { Component } from 'react'

export default class RecipesList extends Component {
    render() {
        const recipes = this.props.recipes.map((recipe) => {
            return (
                <Recipe {...recipe} deletePost={this.props.deletePost} key={recipe.id} />
            )
        })
        return (
            <div>
                <h1>Recipes</h1>

                {this.props.recipes.length > 0 ? recipes : null}
            </div>
        )
    }
}

// const RecipesList = (props) => {

//     const recipes = props.recipes.map((post) => {
//         return (
//             <Recipe {...post} deletePost={props.deletePost} key={post.id} />
//         )
//     })
//     return (
//         <div>
//             <h1>Recipes</h1>

//             {props.recipes.length > 0 ? recipes : null}
//         </div>
//     )
// }

// export default RecipesList