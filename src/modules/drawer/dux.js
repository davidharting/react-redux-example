import reducer from '../reducer'

const OPEN = 'drawer/OPEN'
const CLOSE = 'drawer/CLOSE'

const initState = {
  isOpen: false
}

function open(state = initState) {
  return {
    isOpen: true
  }
}

function close(state = initState) {
  return {
    isOpen: false
  }
}

export default reducer({
  [OPEN]: open,
  [CLOSE]: close
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

