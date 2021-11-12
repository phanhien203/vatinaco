import ACTIONS from './index'
import axios from 'axios'

export const dispatchLogin = (res) => {
    return {
        type: ACTIONS.LOGIN,
        payload: {
            abc: res
        }
    }
}

export const fetchUser = async (token) => {
    const res = await axios.get('/user/infor', {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetUser = (res) => {
    if (res.data !== null) return {
        type: ACTIONS.GET_USER,
        payload: {
            user: res.data,
            isAdmin: res.data.role === 1 ? true : false
        }
    } 
    else return {
        type: ACTIONS.GET_USER,
        payload: {
            isAdmin: false
        }
    }
}