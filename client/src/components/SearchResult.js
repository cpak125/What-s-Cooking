import React, { Component } from 'react'

export default class SearchResult extends Component {
    addNewRecipe = (name, servings, calPerServing, ingredients, instructions, img) => {
        this.props.addNewRecipe(name, servings, calPerServing, ingredients, instructions, img)
        this.props.handleClose()
        this.props.toggleAddRecipe()
    }
    render() {
        return (
            <div>
                <img src={this.props.img} alt='recipe img' />
                <div>{this.props.name}</div>
                <button onClick={()=> this.addNewRecipe(
                    this.props.name, this.props.servings, this.props.cal_per_serving, 
                    this.props.ingredients, this.props.instructions, this.props.img)}
                    > Add to Recipes
                    </button>

            </div>
        )
    }
}
