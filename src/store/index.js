import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  currentQueue: {
    queueID: 0,
    columnNames: ['Name', 'Job', 'Title'],
    rows: [{ cells: [ 'joe', 'carpenter', 'boss' ] },
      { cells: [ 'brian', 'tennis player', 'trainer' ] },
      { cells: [ 'zedd', 'musician', 'self-employed' ] }],
    filterKey: 0
  },
  queueList: [{id: 0, name: 'Base Queue', count: 3}, {id: 1, name: 'Other Queue', count: 2}]
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
