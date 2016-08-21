import React, { PropTypes } from 'react'

const User = ({ onClick, name }) => (
  <li onClick={onClick}>
    {name}
  </li>
)

User.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default User
