import Axios from "axios";

const host = '192.168.0.114'
const port = '3000'

const api = Axios.create({
    baseURL: `http://${host}:${port}`
})

export default api;