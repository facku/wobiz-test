import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import createPersistedState from 'vuex-persistedstate'

import user from './user'

Vue.use(Vuex)

function rehydrated (store) {
  axios.defaults.headers.common.Authorization =
    'Bearer ' + store.state.user.token
}

export default function () {
  const Store = new Vuex.Store({
    modules: {
      user
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

  return Store
}
