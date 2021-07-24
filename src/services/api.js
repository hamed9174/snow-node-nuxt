import axios from 'axios'
import { baseURL } from './xhr'

let token;
 if (localStorage.getItem('token')){
     token = localStorage.getItem('token')
 } else if (sessionStorage.getItem('token')){
     token = sessionStorage.getItem('token')
 }
const api =  () => {
    return axios.create({
        baseURL : baseURL,
        headers: {
            common: {
                Accept : 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + token
            }
        }
    })
}
export default api()