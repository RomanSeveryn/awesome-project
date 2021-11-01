import { getUsers } from '../../service/api'
import { ActionTypes } from './action-types';

const startLoading = () => ({ type: ActionTypes.START_LOADING })
const finishLoading = () => ({ type: ActionTypes.FINISH_LOADING })
const fetchUsers = payload => ({ type: ActionTypes.FETCH_USERS, payload })


export const loadUsers = () => {
  try {
    startLoading()
    const response = getUsers.then(res => {
      const br = res.data
      console.log('br', br)
      return br
    })
    console.log('response', response)
    
    store.dispatch(fetchUsers(response))
    finishLoading()
  } catch (error) {
    console.log('error', error)
  }
}
