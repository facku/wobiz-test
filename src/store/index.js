import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import createPersistedState from 'vuex-persistedstate'

import user from './user'
import app from './app'

Vue.use(Vuex)

function rehydrated (store) {
  console.log('states hidrated from LS')
  axios.defaults.headers.common.Authorization =
    'Bearer ' + store.state.user.token
}

const Store = new Vuex.Store({
  modules: {
    user,
    app
  },

  plugins: [
    createPersistedState({
      key: 'wobiz',
      storage: localStorage,
      rehydrated
    })
  ],

  strict: process.env.DEV
})

export default function () {
  return Store
}

export { Store }
