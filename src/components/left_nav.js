import React from 'react'
import { Link } from 'react-router-dom'

class LeftNav extends React.Component {
  render() {
    return (
      <div>
        <Link to='/counter'>Counter</Link> -|-|-
        <Link to='/todo'>Todo List</Link>
      </div>
    )
  }
}

export default LeftNav