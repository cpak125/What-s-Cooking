import React, { Component } from 'react'
import Preview from './Preview';

export default class SearchResult extends Component {
    state = {
        openPreview: false
    }

    togglePreview = () => {
        this.setState({ openPreview: !this.state.openPreview })
    }

    render() {
        return (
            <div>
                {this.state.openPreview ?
                    <Preview
                        name={this.props.name}
                        img={this.props.img}
                        ingredients={this.props.ingredients}
                        servings={this.props.servings}
                        calories={this.props.calories}
                        instructions={this.props.instructions}
                        addNewRecipe={this.props.addNewRecipe}
                        handleClose={this.props.handleClose}
                        toggleAddRecipe={this.props.toggleAddRecipe}
                        togglePreview={this.togglePreview}
                    /> :
                    <div onClick={this.togglePreview}>
                        <h2>{this.props.name}</h2>
                        <img src={this.props.img} alt='recipe img' />
                    </div>}
            </div>

        )
    }
}
