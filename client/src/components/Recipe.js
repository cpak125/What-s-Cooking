import React, { Component } from 'react'

export default class Recipe extends Component {
    render() {
        const deleteRecipe = () => {
            this.props.deleteRecipe(this.props.id)
        }
        return (
            <div>
                <img src={this.props.img} />
                <div><h2>{this.props.name}</h2></div>
                <div>{this.props.ingredients}</div>
                <div>{this.props.cal_per_serving}</div>
                <div>{this.props.servings}</div>
                <div>{this.props.instructions}</div>
                <div><button onClick={deleteRecipe}>Delete</button></div>
            </div>
        )
    }
}

