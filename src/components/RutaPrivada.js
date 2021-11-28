import React, {useEffect, useState} from 'react'
import {Route, Redirect} from 'react-router-dom'




const RutaPrivada = ({component: Component, ...rest}) => {
  
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('user');
    if(token !== null) {
        setLoggedIn(true);
        // console.log(token)
    }
}, []);
const redirectToSignIn = () => {
  <Redirect to="/signin" />
}

  return (
      <Route {...rest}>
        { loggedIn ? <Component/> : redirectToSignIn() }
      </Route>
  )
}

export default RutaPrivada
