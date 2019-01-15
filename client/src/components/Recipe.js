import React, { Component } from 'react'

export default class Recipe extends Component {
    render() {
        return (
            <div>
                <div>{this.props.img}</div>
                <div><h2>{this.props.name}</h2></div>
                <div>{this.props.ingredients}</div>
                <div>{this.props.cal_per_serving}</div>
                <div>{this.props.servings}</div>
                <div>{this.props.instructions}</div>
            </div>
        )
    }
}

// const Recipe = (this.props) => {
//     return (
//         <div>
//             <div>{this.props.img}</div>
//             <div><h2>{this.props.name}</h2></div>
//             <div>{this.props.ingredients}</div>
//             <div>{this.props.cal_per_serving}</div>
//             <div>{this.props.servings}</div>
//             <div>{this.props.instructions}</div>
//         </div>
//     )
// }

// export default Recipe
