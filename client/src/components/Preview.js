import React, { Component } from 'react'
import { Modal, Grid, Image, Button, Icon } from 'semantic-ui-react';

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
                <div style={{ padding: '0 0 15px 0' }} key={i}>{ingredient}</div>
            )
        })
        return (


            <Modal
                size='fullscreen'
                closeIcon
                open={this.state.modalOpen}
                onClose={this.handleClose} >

                <Grid relaxed stackable>
                    <Grid.Row style={{ padding: '40px 0 0 0' }} centered textAlign='center'>
                        <h2>{this.props.name}</h2>
                    </Grid.Row>

                    <Grid.Row divided centered >
                        <Grid.Column width={6}>
                            <Image centered src={this.props.img} alt='recipe img' />
                        </Grid.Column>

                        <Grid.Column verticalAlign="middle" width={3}>
                            <h3>{this.props.servings}</h3>
                            Servings
                    </Grid.Column>

                        <Grid.Column verticalAlign='middle' width={3}>
                            <h3>{Math.round(this.props.calories / this.props.servings)}</h3>
                            Calories/Serving:
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row style={{ padding: '0 0 40px 0' }} divided centered>
                        <Grid.Column textAlign='left' stretched width={5}>
                            <h3>Ingredients:</h3>
                            {ingredientsList}
                        </Grid.Column>

                        <Grid.Column textAlign='center' stretched width={5}>
                                <div>
                                    <h3>Preparation</h3>
                                    <a target='_blank' rel="noopener noreferrer" href={this.props.instructions}><h4>Instructions</h4></a>
                                </div>
                                <div>
                                    <Button size ='large' icon labelPosition='left' color='green' onClick={() => this.addNewRecipe(
                                        this.props.name, this.props.ingredients, this.props.servings,
                                        this.props.calories, this.props.instructions, this.props.img)}
                                    > 
                                    <Icon name='plus square' />
                                    Save
                                    </Button>
                                </div>
                        </Grid.Column>

                    </Grid.Row>

                </Grid>

                {/* <Modal.Header>{this.props.name}</Modal.Header>
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
                </Modal.Content> */}
            </Modal >
        )
    }
}
