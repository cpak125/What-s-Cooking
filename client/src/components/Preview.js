import React, { Component } from 'react'

export default class Preview extends Component {

    addNewRecipe = (name, ingredients, servings, calories, instructions, img) => {
        this.props.addNewRecipe(name, ingredients, servings, calories, instructions, img)
        this.props.handleClose()
        this.props.toggleAddRecipe()
    }

    render() {

        const ingredientsStr = this.props.ingredients + ''

        const ingStrSplit = ingredientsStr.split(/,(?! )/)

        const ingredientsList = ingStrSplit.map((ingredient, i) => {
            return (
                <div key={i}>{ingredient}</div>
            )
        })
        return (
            <div onClick={this.props.togglePreview}>
                <h2>{this.props.name}</h2>
                <img src={this.props.img} alt='recipe img' />
                <div><h3>Servings:</h3> {this.props.servings}</div>
                <div><h3>Calories/Serving:</h3> {Math.round(this.props.calories / this.props.servings)}</div>
                <div> <h3>Ingredients:</h3>
                    {ingredientsList}
                </div>
                <div><a target='_blank' rel="noopener noreferrer" href={this.props.instructions}><h3>Instructions</h3> </a></div>

                <button onClick={() => this.addNewRecipe(
                    this.props.name, this.props.ingredients, this.props.servings,
                    this.props.calories, this.props.instructions, this.props.img)}
                > Add to Recipes
                </button>
            </div>
        )
    }
}
