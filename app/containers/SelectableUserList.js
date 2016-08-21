import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import UserList from '../components/UserList'
import { displayUser } from '../actions'

import USER_DATA from '../components/UserList/user-data'; //simulate call


const mapStateToProps = (state) => {
  return {
    users: USER_DATA
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUserClick: (id) => {
      console.log(id);
      dispatch(displayUser(id));
    }
  }
}

const SelectableUserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)

export default SelectableUserList
