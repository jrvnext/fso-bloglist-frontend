import React, { useState } from 'react'
import loginService from '../services/login'

const Login = ({ setUser }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password
      })
      window.localStorage.setItem(
        'loggedBloglistUser',
        JSON.stringify(user)
      )
      setUser(user)
    } catch (exception) {
      console.log(exception.message)
    }
  }

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default Login