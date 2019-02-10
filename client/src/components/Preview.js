import React, { Component } from 'react'
import { Modal, Card, Image, Button } from 'semantic-ui-react';

export default class Preview extends Component {
    state = {
        modalOpen: true
    }

    handleOpen = () => {
        this.setState({ modalOpen: true })
    }

    handleClose = () => this.setState({ modalOpen: false })

    addNewRecipe = (name, ingredients, servings, calories, instructions, img) => {
        this.props.addNewRecipe(name, ingredients, servings, calories, instructions, img)
        this.props.handleClose()
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


            <Modal
                size='fullscreen'
                closeIcon
                centered={false}
                open={this.state.modalOpen}
                onClose={this.handleClose} >

                <Modal.Header>{this.props.name}</Modal.Header>
                <Modal.Content image>
                    <Image wrapped src={this.props.img} alt='recipe img' />
                    <Modal.Description>
                        <h3>Servings:</h3> {this.props.servings}
                        <h3>Calories/Serving:</h3> {Math.round(this.props.calories / this.props.servings)}
                        <div>
                            <h3>Ingredients:</h3>
                            {ingredientsList}
                        </div>
                        <div>
                            <h3>Preparation</h3>
                            <a target='_blank' rel="noopener noreferrer" href={this.props.instructions}><h3>Instructions</h3> </a></div>
                    </Modal.Description>
                    <Button onClick={() => this.addNewRecipe(
                        this.props.name, this.props.ingredients, this.props.servings,
                        this.props.calories, this.props.instructions, this.props.img)}
                    > Add to Recipes
                </Button>
                </Modal.Content>
            </Modal>
        )
    }
}
