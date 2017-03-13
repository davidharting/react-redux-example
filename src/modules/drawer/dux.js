import reducer from '../reducer'

const OPEN = 'drawer/OPEN'
const CLOSE = 'drawer/CLOSE'
const TOGGLE = 'drawer/TOGGLE'

const initState = {
  isOpen: false
}

function open(state = initState) {
  return {
    ...state,
    isOpen: true
  }
}

function close(state = initState) {
  return {
    ...state,
    isOpen: false
  }
}

function toggle(state = initState) {
  return {
    ...state,
    isOpen: !state.isOpen
  }
}

export default reducer({
  [OPEN]: open,
  [CLOSE]: close,
  [TOGGLE]: toggle
}, initState)

export function openDrawer() {
  return {
    type: OPEN
  }
}

export function closeDrawer() {
  return {
    type: CLOSE
  }
}

export function toggleDrawer() {
  return {
    type: TOGGLE
  }
}

