import { getUsers } from '../../service/api'
import { ActionTypes } from './action-types'


const startLoading = () => ({ type: ActionTypes.START_LOADING })
const finishLoading = () => ({ type: ActionTypes.FINISH_LOADING })
const fetchUsers = payload => ({ type: ActionTypes.FETCH_USERS, payload })
const deleteUser = payload => ({ type: ActionTypes.REMOVE_USER, payload })

export const loadUsers = () => (dispatch) => {
  try {
    startLoading()
    getUsers.then(res => {
      dispatch(fetchUsers(res.data))
    })

    finishLoading()
  } catch (error) {
    console.log('error', error)
  }
}

export const removeUser = (users) => (dispatch) => {
  try {
      dispatch(deleteUser(users))

  } catch (error) {
    console.log('error', error)
  }
}
