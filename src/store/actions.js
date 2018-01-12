import api from '@/api/requests'

export const selectNewQueue = ({commit, state}, id) => {
  api.getQueueEntries((data) => {
    commit('updateMainQueue', data)
  }, id)
}
