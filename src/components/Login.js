import React from 'react'

const handleLogin = (props) => {
  console.log(props)
}

const Login = ({ username, setUsername, password, setPassword }) => (
  <div>
    <h2>login</h2>
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  </div>
)

export default Login