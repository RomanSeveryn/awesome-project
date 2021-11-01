import { getUsers } from '../../service/api'
import { store } from '../../store'
import { ActionTypes } from './action-types'

const startLoading = () => ({ type: ActionTypes.START_LOADING })
const finishLoading = () => ({ type: ActionTypes.FINISH_LOADING })
const fetchUsers = payload => ({ type: ActionTypes.FETCH_USERS, payload })

export const loadUsers = () => {
  try {
    startLoading()
    const response = getUsers.then(res => {
      const br = res.data
      console.log('br', br)
      store.dispatch(fetchUsers(br))

      return br
    })

    finishLoading()
  } catch (error) {
    console.log('error', error)
  }
}
