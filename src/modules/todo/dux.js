import reducer from '../reducer'

const ADD = 'todo/ADD'
const DRAFT = 'todo/DRAFT'

const initState = {
  list: [],
  draft: ''
}

function add(state = initState, action) {
  return {
    ...state,
    list: [...state.list, action.data]
  }
}

function draft(state = initState, action) {
  return {
    ...state,
    draft: action.data
    // Should I just tend to call this "data" everywhere
    // Or make specific names on a per action basis?
  }
}

export default reducer({
  [ADD]: add,
  [DRAFT]: draft
}, initState)

export function addTodo(task) {
  return {
    type: ADD,
    data: task
  }
}

export function draftTodo(newDraft) {
  return {
    type: DRAFT,
    data: newDraft
  }
}
