import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import { setAxiosDefaults, userIsLoggedIn } from './util/SessionHeaderUtil'
import SignUpLogIn from './components/SignUpLogIn';
import RecipesList from './components/RecipesList';
import GlobalNav from './components/GlobalNav';
import Recipe from './components/Recipe';


class App extends Component {
  state = {
    signedIn: false,
    recipes: [],
    newRecipe: {
      name: '',
      ingredients: '',
      servings: '',
      calories: '',
      instructions: '',
      img: ''
    }
  }

   componentDidMount = async () => {
    const signedIn = userIsLoggedIn()

    let recipes = []
    if (signedIn) {
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

  addNewRecipe = async (name, ingredients, servings, calories, instructions, img) => {
    const newRecipe = { ...this.state.newRecipe }
    newRecipe.name = name
    newRecipe.ingredients = ingredients
    newRecipe.servings = servings
    newRecipe.calories= calories
    newRecipe.instructions = instructions
    newRecipe.img = img
    await this.setState({ newRecipe })
    this.handleSubmitRecipe()
  }

  handleSubmitRecipe = async () => {
    await axios.post('/recipes', this.state.newRecipe)
    const recipes = await this.getRecipes()
    this.setState({
      newRecipe: {
        name: '',
        ingredients: '',
        servings: '',
        calories: '',
        instructions: '',
        img: ''
      },
      recipes
    })
  }

  deleteRecipe = async (recipeId) => {
    await axios.delete(`/recipes/${recipeId}`)
    const recipes = await this.getRecipes()
    this.setState({ recipes })
  }

  setUserSignedIn = async () => {
    const recipes = await this.getRecipes()
    this.setState({
      signedIn: true,
      recipes
    })
  }

  signOut = () => {
    this.setState({
      signedIn: false,
      recipes: []
    })
  }

  render() {

    const SignUpLogInComponent = () => (
      <SignUpLogIn setUserSignedIn={this.setUserSignedIn} />
    )

    const RecipesComponent = () => (
      <RecipesList
        recipes={this.state.recipes}
        addNewRecipe={this.addNewRecipe}
      />
    )

    return (
      <Router >
        <div className='App'>
          <GlobalNav signedIn={this.state.signedIn} signOut={this.signOut} />

          <Switch>
            <Route exact path='/signUp' render={SignUpLogInComponent} />
            <Route exact path='/recipes' render={RecipesComponent} />
            <Route exact path='/recipes/:id' component={Recipe} />
          </Switch>

          {this.state.signedIn ? <Redirect to='/recipes' /> : <Redirect to='/signUp' />}
        </div>
      </Router>
    )
  }
}

export default App
