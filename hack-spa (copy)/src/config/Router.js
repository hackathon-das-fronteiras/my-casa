import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Inicio from '../Components/Inicio/Inicio'
import Login from '../Components/Login/Login'
import Edit from '../Components/User/Edit'
import NewUser from '../Components/User/New'
import Category from '../Components/Category/Category' 
import Teste from '../Components/Teste/Teste'
import Intro from '../design/intro'
import Profile from '../design/profile/profile'
import Anuncio from '../design/anuncio/anuncio'
import AnuncioForm from '../design/anuncio/form'

const loggedIn =  () => {
	const token = localStorage.getItem('jwt');
	if (token === null) {
    return false
	} else {
    return true
	}
 }

export default class Router extends Component {
  render() {
    return (
      <Switch>


        <Route exact path="/user/edit" render={() => (
          loggedIn() ? (
            <Route exact path="/user/edit" component={Edit} />
          ) : (
          <Redirect to="/login" />
          )
        )}/>

          <Route exact path="/" component={Intro} />
          <Route exact path="/anuncio" component={Anuncio} />
          <Route exact path="/add" component={AnuncioForm} />
          <Route exact path="/intro" component={Intro} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/user/edit" component={Edit} />
          <Route exact path="/cadastro" component={NewUser} />
          <Route exact path="/categoria" component={Category} />
          <Route exact path="/teste" component={Teste} />

        </Switch>
    )
  }
};
