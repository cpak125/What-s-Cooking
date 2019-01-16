import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import { saveAuthTokens, setAxiosDefaults, userIsLoggedIn, clearAuthTokens } from './util/SessionHeaderUtil'
import SignUpLogIn from './components/SignUpLogIn';
import RecipesList from './components/RecipesList';
import FlashError from './components/FlashError';

class App extends Component {
  state = {
    signedIn: false,
    recipes: [],
    error: ''
  }

  async componentWillMount() {
    const signedIn = userIsLoggedIn()

    let recipes = []
    if (this.state.signedIn) {
      setAxiosDefaults()
      recipes = await this.getRecipes()
    }

    this.setState({
      recipes,
      signedIn
    })
  }

  getRecipes = async () => {
    const response = await axios.get('/recipes')
    return response.data

  }

  signUp = async (email, password, password_confirmation) => {
    try {
      const payload = {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
      const response = await axios.post('/auth', payload)
      saveAuthTokens(response.headers)
      this.setState({ signedIn: true })
    } catch (error) {
      let errorMessage = ''
      if (error.response.status === 422) {
        errorMessage = 'Invaild email and/or passwords do not match'
      }
      this.setState({ error: errorMessage })
    }
  }

  signIn = async (email, password) => {
    try {
      const payload = {
        email,
        password
      }
      const response = await axios.post('/auth/sign_in', payload)
      saveAuthTokens(response.headers)

      const recipes = await this.getRecipes()

      this.setState({
        signedIn: true,
        recipes
      })

    } catch (error) {
      let errorMessage = ''
      if (error.response.status === 401) {
        errorMessage = "Invalid email and/or password"
      }
      this.setState({ error: errorMessage })
    }
  }

  dismissError = () => {
    this.setState({ error: '' })
  }

  signOut = async (event) => {

    try {
      event.preventDefault()
      await axios.delete('/auth/sign_out')

      clearAuthTokens();

      this.setState({ signedIn: false })
    } catch (error) {
      console.log(error)
    }
  }

  deleteRecipe = async (recipeId) => {
    try {
      await axios.delete(`/recipes/${recipeId}`)
      const recipes = await this.getRecipes()
      this.setState({ recipes })
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    const SignUpLogInComponent = () => (
      <SignUpLogIn
        signUp={this.signUp}
        signIn={this.signIn} />
    )

    const RecipesComponent = () => (
      <RecipesList
        recipes={this.state.recipes}
        deleteRecipe={this.deleteRecipe} />
    )

    return (
      <Router >
        <div>
          {this.state.error ? <FlashError error={this.state.error} dismissError={this.dismissError} /> : null}

          <Switch>
            <Route exact path='/signUp' render={SignUpLogInComponent} />
            <Route exact path='/recipes' render={RecipesComponent} />
          </Switch>
          <button onClick={this.signOut}>Sign Out</button>

          {this.state.signedIn ? <Redirect to='/recipes/' /> : <Redirect to='/signUp' />}
        </div>
      </Router>
    )
  }
}

export default App
