import React, { Component } from 'react'
import Preview from './Preview';
import { Grid, Image, Card} from 'semantic-ui-react';

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
                        togglePreview={this.togglePreview}
                        openPreview={this.state.openPreview}
                    /> :
                   <Grid.Column style={{ padding: '0 0 3vw 0'}}>
                        <Card onClick={this.togglePreview}>
                        <Image src={this.props.img} alt='recipe img' />
                            <Card.Content>
                                <Card.Header textAlign='center'>{this.props.name}</Card.Header>
                                <Card.Description textAlign='center'>{Math.round(this.props.calories / this.props.servings)} Calories | {this.props.servings} Servings</Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                }
            </div>

        )
    }
}
