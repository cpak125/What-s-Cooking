import React from 'react'

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

export default Recipe
