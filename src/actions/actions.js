import api from "../services/api";


// Auth methods
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

// portfolio methods
export const getPortfolio = async() =>{
    // get portfolios
    try {
        const response = await api.get('portfolios')
        return response.data
    } catch (err) {
        console.log(err)
    }
}

// comments
export  const getComments = async () =>{
    try {
        const response = await api.get('comments')
        return response.data
    } catch (err) {
        console.log(err)
    }
}

// about-us
export  const getAbout = async () =>{
    try {
        const response = await api.get('about')
        return response.data
    } catch (err) {
        console.log(err)
    }
}

// blogs
export  const getBlogs = async () =>{
    try {
        const response = await api.get('blogs')
        return response.data
    } catch (err) {
        console.log(err)
    }
}
export  const getBlogsCategory = async () =>{
    try {
        const response = await api.get('blog-category')
        return response.data[0].categories
    } catch (err) {
        console.log(err)
    }
}