import api from "../services/api";
import store from '../store'

export const login = async(form, rememberMe) => {
    let data = {
        username: form.username,
        password: form.password
    }
    const res = await api.post('login', data)
    if (rememberMe) {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data))
    } else {
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('user', JSON.stringify(res.data))
    }
    return res.data
}
export const register = async(form, rememberMe) => {
    const res = await api.post('register', form)
    if (rememberMe) {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data))
    } else {
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('user', JSON.stringify(res.data))
    }
    return res.data
}