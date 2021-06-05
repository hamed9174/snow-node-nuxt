import axios from "axios";

const api = axios.create({
        baseURL : 'http://localhost:5000/',
        headers: {
            common: {
                Authorization : 'bearer ' + localStorage.getItem('token'),
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }
    })
export default api
