import React, { PropTypes } from 'react'
import User from '../User'

const UserList = ({ users, onUserClick }) => {
    console.log(users);
    return (
      <ul>
        {users.map(user =>
          <User
            key={user.id}
            {...user}
            onClick={() => onUserClick(user.id)}
          />
        )}
      </ul>
    )
}
UserList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onUserClick: PropTypes.func.isRequired
}

export default UserList
