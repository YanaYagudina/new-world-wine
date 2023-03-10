import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from '../styled/Form'

function Login({ updateUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [signup, setSignup] = useState(false)
  const [errors, setErrors] = useState([])
  const history = useHistory()

  const { username, password } = formData

  function onSubmit(e) {
    e.preventDefault()
    const user = {
      username,
      password
    }
    let url = `/login`
    if (signup) url = '/users'
    // Logs in user
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            console.log(user)
            updateUser(user)
            history.push(`/users/${user.id}`)
          })
        } else {
          res.json().then(json => setErrors(json.errors))
        }
      })

  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  return (
    <>
      <Form onSubmit={onSubmit}>
        <label>
          Username
        </label>
        <input type='text' name='username' value={username} onChange={handleChange} />

        <label>
          Password
        </label>
        <input type='password' name='password' value={password} onChange={handleChange} />

        <input type='submit' value='Log in!' />
        {/* <input type='submit' onClick={() => setSignup(true)} value='Sign up!'/> */}
      </Form>
      {errors ? <div>{errors}</div> : null}
    </>
  )
}

export default Login
