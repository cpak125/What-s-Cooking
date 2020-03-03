import React, { Component } from 'react'
import axios from 'axios'
import SearchResults from './SearchResults'
import { Input, Button, Icon, Modal, Image } from 'semantic-ui-react'

export default class AddRecipe extends Component {
    state = {
        searchQuery: '',
        searchResults: [],
        modalOpen: false
    }

    transferResult = (response) => {
        this.setState({ searchResults: response.data.hits })
    }

    inputChangeHandler = (event) => {
        this.setState({ searchQuery: event.target.value })
    }

    searchButtonHandler = async () => {
        const response = await axios.get(`https://api.edamam.com/search?q=${this.state.searchQuery}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=25`)
        this.transferResult(response)
        this.handleOpen()
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({
        searchQuery: '',
        searchResults: [],
        modalOpen: false
    })

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.searchButtonHandler()
        }
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>

                <Input
                    type='text'
                    focus
                    centered='true'
                    style={{ width: '50vw' }}
                    placeholder='Search for a Recipe...'
                    value={this.state.searchQuery}
                    onChange={this.inputChangeHandler}
                    onKeyPress={this.handleKeyPress} >
                </Input>

                <Modal
                    trigger={
                        <Button icon onClick={this.searchButtonHandler}>
                            <Icon name='search' />
                        </Button>}
                    size='fullscreen'
                    closeIcon
                    centered={false}
                    open={this.state.modalOpen}
                    onClose={this.handleClose} >

                    <Modal.Content>
                        <SearchResults
                            searchResults={this.state.searchResults}
                            addNewRecipe={this.props.addNewRecipe}
                            handleClose={this.handleClose} />
                    </Modal.Content>
                </Modal>

                <Image centered src='../../img/edamam_logo.png' alt='edamam logo'></Image>

            </div>
        )
    }
}
