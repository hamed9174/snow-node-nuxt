import { baseURL } from '~/services/xhr'

export default function ({ $axios, store }, inject) {
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  })

  // Set baseURL to something different

  api.setBaseURL(baseURL)

  if (process.client && store.state.auth && store.state.auth.user) {
    const token = store.state.auth.user.token
    api.setToken(token, 'Bearer')
  }

  api.onResponse((response) => {
    if (response.status === 404) {
      console.log('Oh no it returned a 404')
    }
  })

  inject('api', api)
}
