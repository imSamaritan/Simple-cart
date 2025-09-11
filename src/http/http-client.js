import axios from "axios"

const httpClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/imsamaritan/simple-cart-data",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})


