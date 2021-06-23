import { baseURL } from '~/utilities/xhr'

export default function ({ $axios }, inject) {
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  })

  api.setBaseURL(baseURL)
  inject('api', api)
}
