import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  currentQueue: {
    queueID: 0,
    columnNames: ['Loan Number', 'Loan Type', 'Name on Application'],
    rows: [{ cells: [ '0', 'Mortgage', 'Bob the Builder' ] },
      { cells: [ '3', 'Personal', 'Tracer' ] },
      { cells: [ '9', 'Vehicle', 'Reinhardt' ] }],
    filterKey: 0
  },
  queueList: [{id: '1', name: 'Base Queue', count: 3}, {id: '2', name: 'Other Queue', count: 2}]
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
