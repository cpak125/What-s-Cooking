import React, { Component } from 'react'
import Preview from './Preview';
import { Grid, Image, Card, CardDescription } from 'semantic-ui-react';

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
                    <div>
                        <Grid.Column style={{ padding: '0 0 3vw 0' }}>
                            <Card style={{ width: '20vw' }} onClick={this.togglePreview}>
                                <Card.Header textAlign='center'>{this.props.name}</Card.Header>
                                <Image src={this.props.img} alt='recipe img' />
                            </Card>
                        </Grid.Column>
                    </div>
                }
            </div>

        )
    }
}
