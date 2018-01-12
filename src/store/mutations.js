export const changeFilterKey = (state, key) => {
  state.currentQueue.filterKey = key
}

const mapLoanTypeToStr = (loanType) => {
  switch (loanType) {
    case 0: return 'Credit Card'
    case 1: return 'Personal'
    case 2: return 'Mortgage'
    case 3: return 'Vehicle'
  }
}

export const updateMainQueue = (state, data) => {
  let rows = []
  data.forEach(element => {
    let cells = []
    cells[0] = String(element.loanNumber)
    cells[1] = mapLoanTypeToStr(element.loanType)
    cells[2] = element.fName + ' ' + element.lName
    rows.push({cells: cells})
  })
  state.currentQueue.rows = rows
}

export const updateQueueList = (state, data) => {
  state.queueList = data
}
