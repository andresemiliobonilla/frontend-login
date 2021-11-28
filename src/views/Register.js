import React, { useState } from 'react'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Register = () => {

  const history = useHistory();

  const [data, setData] = useState({});

  const inputChange = (e) => {

    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    })
  }


  const formSubmit = (e) => {
    e.preventDefault();
    axios.post('https://abonilla01.herokuapp.com/auth/register', data)
      .then(res => {
        alert(res.data.message);
        history.push('/login');
      })
      .catch(err => {
        alert(err.response.data.message)
      })
  }

  return (
    <>
       <div className="container">
        <Form onSubmit={formSubmit}>
          <FormGroup>
            <Label for="Email">
              Email
            </Label>
            <Input
              name="correo"
              placeholder="email"
              type="email"
              onChange={inputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Usuario">
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
            <Label for="Password">
              Password
            </Label>
            <Input
              name="clave"
              placeholder="password"
              type="password"
              onChange={inputChange}
            />
          </FormGroup>
          <Button type="submit">
            Registrar
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Register
