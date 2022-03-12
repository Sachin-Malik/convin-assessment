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


// There Is not ENDPOINT In given API to fetch all user in One Call
// So here We are making 2 Calls to Get All Users and populatig our REDUX Store with those users.
// And then we will render 'button' for each user Dynamically On Dashboard and that Data will be coming from the store.

export const fetchUsers = ()=>{
    let users = [];
    return (dispatch)=>{
        dispatch(fetchUsersRequest);
        axios
            .get('https://reqres.in/api/users?page=1')
            .then(response=>{
                users.push(...response.data.data);
                axios
                     .get('https://reqres.in/api/users?page=2')
                     .then(response=>{
                         users.push(...response.data.data);
                         dispatch(fetchUsersSuccess(users))
                     })
                     .catch(error=>{
                        dispatch(fetchUsersFailure(error))
                    })
              
            })
            .catch(error=>{
                dispatch(fetchUsersFailure(error))
            })
    }
}

export default fetchUsers;