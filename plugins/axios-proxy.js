import axios from 'axios'
let instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})
export default (context, inject ) => {
  // adding instance of axios in app as axiosClient
  inject('axiosClient', {
    getData: (endpoint) => {
      return instance.get(endpoint)
    }
  })
}