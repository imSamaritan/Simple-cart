import axios from "axios"

const httpClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/imsamaritan/simple-cart-data",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

const api = {
  getProducts: async (path) => {
    const request = await httpClient.get(path)
    return request.data
  },

  getProduct: async (path, id) => {
   const request = await httpClient.get(`${path}/${id}`)
   return request.data
  }
}

export default api
