import React, { Component } from 'react'

export default class Recipe extends Component {
    render() {
        const Recipe = (props) => {
            return (
                <div>
                    <div>{props.img}</div>
                    <div><h2>{props.name}</h2></div>
                    <div>{props.ingredients}</div>
                    <div>{props.cal_per_serving}</div>
                    <div>{props.servings}</div>
                    <div>{props.instructions}</div>
                </div>
            )
        }
        return (
            <div>
                {Recipe}
            </div>
        )
    }
}
