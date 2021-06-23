export const state = () => ({
  user: ''
})

export const mutations = () => ({
  addUserDetail (state, userDetail) {
    state.user = userDetail
    localStorage.setItem('user', JSON.stringify(state.user))
    // axiosWorker.defaults.headers.common.authorization = 'Bearer ' + state.user.token
  },
  removeUserDetail () {
    localStorage.removeItem('user')
    this.state.user = {}
    window.location.href = '/'
  }
})

export const getters = () => ({
  isLoggedIn: (state) => {
    return state.user.token
  }
})
