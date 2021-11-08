import axios from 'axios'
const baseUrl = '/api/blog'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
// eslint-disable-next-line
export default { getAll }