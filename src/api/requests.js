import axios from 'axios'
import connections from '@/../config/connections.json'

const _apiURL = connections.queueServiceURL

// hack to use default data when no service is running
// will basically wait until network error before updating with dummy data
// there will be a weird delay on the frontend when using this dummy data
export default {
  getQueues (result) {
    axios.get(_apiURL + 'Queues/count')
    .then(response => { result(response.data) })
    .catch(error => {
      console.log(error)
      result(dummyData.queues.map(queue => {
        return {
          id: queue.id,
          name: queue.name,
          count: dummyData.queueEntries.filter(entry => entry.queueId === queue.id).length}
      }))
    })
  },
  getQueueEntries (result, queueID) {
    axios.get(_apiURL + `Queues/${queueID}/applications`)
    .then(response => { result(response.data) })
    .catch(error => {
      console.log(error)
      result(dummyData.queueEntries.filter(entry => entry.queueId === queueID)
      .map(item => dummyData.applications.find(x => x.id === item.applicationId)))
    })
  },
  getApplicationsForQueue (result, queueID) {
    axios.get(_apiURL + `QueueEntries?queueID={queueID}`)
    .then(response => { result(response.data) })
    .catch(error => { console.log(error) })
  }
}

const dummyData = {
  // {id:Number, loanNumber:Number, loanType:Number(0-3), fName:String, lName:String}
  applications: [
    {id: 0, loanNumber: 324, loanType: 0, fName: 'Bradley', lName: 'King'},
    {id: 1, loanNumber: 374, loanType: 1, fName: 'Cool', lName: 'Dude'},
    {id: 2, loanNumber: 422, loanType: 2, fName: 'Bruce', lName: 'Wayne'},
    {id: 3, loanNumber: 285, loanType: 0, fName: 'John', lName: 'Jacob'},
    {id: 4, loanNumber: 824, loanType: 0, fName: 'Claire', lName: 'Danes'},
    {id: 5, loanNumber: 391, loanType: 2, fName: 'Martha', lName: 'Kinsey'},
    {id: 6, loanNumber: 764, loanType: 0, fName: 'Marisol', lName: 'Testcase'},
    {id: 7, loanNumber: 222, loanType: 3, fName: 'Joseph', lName: 'Stutgard'},
    {id: 8, loanNumber: 227, loanType: 2, fName: 'Jose', lName: 'Blanco'},
    {id: 9, loanNumber: 394, loanType: 0, fName: 'Walter', lName: 'White'},
    {id: 10, loanNumber: 304, loanType: 0, fName: 'Heinrich', lName: 'Kingsfield'},
    {id: 11, loanNumber: 124, loanType: 1, fName: 'Sato', lName: 'Hitori'},
    {id: 12, loanNumber: 617, loanType: 2, fName: 'Jin', lName: 'Yu'},
    {id: 13, loanNumber: 888, loanType: 3, fName: 'Ulrich', lName: 'Johenheim'}
  ],
  // {id:Number, name:String}
  queues: [
    {id: 0, name: 'OK'},
    {id: 1, name: 'Awesome!'},
    {id: 2, name: 'GTFO'},
    {id: 3, name: 'Why even bother?'}
  ],
  // {id:Number, queueId:Number, applicationId:Number}
  queueEntries: [
    {id: 0, queueId: 0, applicationId: 1},
    {id: 1, queueId: 0, applicationId: 9},
    {id: 2, queueId: 0, applicationId: 10},
    {id: 3, queueId: 0, applicationId: 3},
    {id: 4, queueId: 0, applicationId: 5},
    {id: 5, queueId: 0, applicationId: 7},
    {id: 6, queueId: 0, applicationId: 2},
    {id: 7, queueId: 0, applicationId: 4},
    {id: 8, queueId: 0, applicationId: 8},
    {id: 9, queueId: 1, applicationId: 10},
    {id: 10, queueId: 1, applicationId: 13},
    {id: 11, queueId: 1, applicationId: 0},
    {id: 12, queueId: 1, applicationId: 1},
    {id: 13, queueId: 1, applicationId: 4},
    {id: 14, queueId: 1, applicationId: 5},
    {id: 15, queueId: 1, applicationId: 3},
    {id: 16, queueId: 2, applicationId: 6},
    {id: 17, queueId: 2, applicationId: 7},
    {id: 18, queueId: 2, applicationId: 8},
    {id: 19, queueId: 2, applicationId: 9},
    {id: 20, queueId: 2, applicationId: 10},
    {id: 21, queueId: 2, applicationId: 11},
    {id: 22, queueId: 2, applicationId: 12},
    {id: 23, queueId: 2, applicationId: 13},
    {id: 24, queueId: 2, applicationId: 3},
    {id: 25, queueId: 2, applicationId: 2},
    {id: 26, queueId: 3, applicationId: 6}
  ]
}
