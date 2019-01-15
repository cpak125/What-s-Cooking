import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import { saveAuthTokens, setAxiosDefaults, userIsLoggedIn } from './util/SessionHeaderUtil'
import SignUpLogIn from './components/SignUpLogIn';
import RecipesList from './components/RecipesList';

class App extends Component {
  state = {
    signedIn: false,
    recipes: []
  }

  async componentDidMount() {
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

    const payload = {
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
    const response = await axios.post('/auth', payload)
    saveAuthTokens(response.headers)
    this.setState({ signedIn: true })

  }

  signIn = async (email, password) => {

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
  }

  render() {

    const SignUpLogInComponent = () => (
      <SignUpLogIn
        signUp={this.signUp}
        signIn={this.signIn} />
    )

    const RecipesComponent = () => (
      <RecipesList
        recipes={this.state.recipes} />
    )

    return (
      <Router >
        <div>
          <Switch>
            <Route exact path='/signUp' render={SignUpLogInComponent} />
            <Route exact path='/recipes' render={RecipesComponent} />
          </Switch>

          {this.state.signedIn ? <Redirect to='/recipes/' /> : <Redirect to='/signUp' />}
        </div>
      </Router>
    )
  }
}

export default App
