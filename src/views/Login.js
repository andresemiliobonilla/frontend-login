import React, { useState } from 'react'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom'



const Login = () => {

  const [data, setData] = useState("");

  let history = useHistory();


  const inputChange = (e) => {
    const {name, value} = e.target;
    setData({
      ...data,
      [name] : value
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();


    axios.post('https://abonilla01.herokuapp.com/auth/login', data)
      .then(res => {
        localStorage.setItem("user", JSON.stringify(res.data));
        history.push('/react-login/dashboard');
        window.location.reload();
      })
      .catch(err => console.log(err))

  }

  return (
    <>
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
    </>
  )
}

export default Login
