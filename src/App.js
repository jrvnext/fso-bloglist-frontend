import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Login from './components/Login'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser');
    loggedUserJSON && setUser(JSON.parse(loggedUserJSON))
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [])

  const handleLogout = async (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedBloglistUser')
    setUser(null)
  }

  const loginOrBlogs = !user
    ? <Login setUser={setUser} />
    : <>
        <h2>blogs</h2>
        {user.name} logged in <button onClick={handleLogout}>logout</button>
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </>

  return (
    <div>
      {loginOrBlogs}
    </div>
  )
}

export default App