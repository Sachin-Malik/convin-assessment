import axios from 'axios'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './userTypes'


const fetchUsersRequest = () =>{
    return {
       type:FETCH_USERS_REQUEST,
    }
}

const fetchUsersSuccess = (users) =>{
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchUsersFailure = (error) =>{
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

export const fetchUsers = ()=>{
    return (dispatch)=>{
        dispatch(fetchUsersRequest);
        axios
            .get('https://reqres.in/api/users')
            .then(response=>{
               dispatch(fetchUsersSuccess(response.data.data))
            })
            .catch(error=>{
                dispatch(fetchUsersFailure(error))
            })
    }
}

export default fetchUsers;