import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import authServices from '../services/auth.services'

export const RutaPublica = ({component: Component, ...rest}) => {
  const token = false;
  if(!token) return <Route {...rest}> <Component/> </Route>
  return <Route {...rest}> <Redirect to="/" /> </Route>
}

export const RutaPrivada = ({component: Component, ...rest}) => {
  const token = authServices.hayToken();
  if(token != null) return <Route {...rest}> <Component/> </Route>
  return <Route {...rest}> <Redirect to="/login" /> </Route>
}
