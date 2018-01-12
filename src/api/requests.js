import axios from 'axios'

const _apiURL = 'http://localhost:60034/api/'

export default {
  getQueues (result) {
    axios.get(_apiURL + 'Queues/count')
    .then(response => { result(response.data) })
    .catch(error => { console.log(error) })
  },
  getQueueEntries (result, queueID) {
    axios.get(_apiURL + `Queues/${queueID}/applications`)
    .then(response => { result(response.data) })
    .catch(error => { console.log(error) })
  },
  getApplicationsForQueue (result, queueID) {
    axios.get(_apiURL + `QueueEntries?queueID={queueID}`)
    .then(response => { result(response.data) })
    .catch(error => { console.log(error) })
  }
}
