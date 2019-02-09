import React, { Component } from 'react'
import Preview from './Preview';

export default class SearchResult extends Component {
    state = {
        openPreview: false
    }

    addNewRecipe = (name, ingredients, servings, calories, instructions, img) => {
        this.props.addNewRecipe(name, ingredients, servings, calories, instructions, img)
        this.props.handleClose()
        this.props.toggleAddRecipe()
    }

    togglePreview = () => {
        this.setState({ openPreview: !this.state.openPreview })
    }

    render() {
        return (
            <div>
            {this.state.openPreview ? 
                <Preview /> :
                    <div onClick={this.togglePreview}>
                        <h2>{this.props.name}</h2>
                        <img src={this.props.img} alt='recipe img' />
                        {/* <button onClick={() => this.addNewRecipe(
                            this.props.name, this.props.ingredients, this.props.servings,
                            this.props.calories, this.props.instructions, this.props.img)}
                        > Add to Recipes
                </button> */}
                    </div>}
            </div>

        )
    }
}
