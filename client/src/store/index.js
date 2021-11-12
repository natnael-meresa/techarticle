import { createStore } from 'vuex'
// import axios from 'axios'
import {moduleA} from './auth'
import {moduleB} from './article'
import {profile} from './profile'

// import router from '../router'

export default createStore({
  modules: {
    a: moduleA,
    b: moduleB,
    profile
  }
})