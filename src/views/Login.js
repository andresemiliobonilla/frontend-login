import React, { useState, useEffect } from 'react'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'
import { useHistory , Redirect} from 'react-router-dom'
import authServices from '../services/auth.services'

const Login = () => {

  const [data, setData] = useState("");
  const [redirigir, setRedirigir] = useState(null);

  let history = useHistory();

  useEffect(() => {
    authVerify();
  }, [])
  
  const authVerify = () => {
    const token = authServices.hayToken();
    if(token != null)
    {
      setRedirigir(true)
    }
  }

  const inputChange = (e) => {
    const {name, value} = e.target;
    setData({
      ...data,
      [name] : value
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    authServices.loginUser(data)
      .then(res => {
        localStorage.setItem("user", JSON.stringify(res.data));
        history.push('/dashboard');
        window.location.reload();
      })
      .catch(err => console.log(err))
  }

  return (
    <>
    {
      redirigir ?
        <Redirect exact to="/dashboard" />
      :
      <div className="container">
        <Form onSubmit={formSubmit}>
          <FormGroup>
            <Label for="usuario">
              Usuario
            </Label>
            <Input
              name="usuario"
              placeholder="usuario"
              type="text"
              onChange={inputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">
              Password
            </Label>
            <Input
              name="clave"
              placeholder="password"
              type="password"
              onChange={inputChange}
            />
          </FormGroup>
          <Button>
            Submit
          </Button>
        </Form>
      </div>
    }

    </>
  )
}

export default Login
