//This Component is Responsible for Populating Redux Store.

import React from 'react'
import {useState, useEffect} from 'react';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import fetchUsers from '../redux/users/userActions'

import UserPlaceHolder from './UserPlaceHolder';
import SingleUser from './SingleUser';
import Loading from './Loading';

function UserDetail() {
  
  const [currentUser,setCurrentUser]=useState(null);
  const [isLoading, setIsLoading]=useState(false);

  const usersFromStore = useSelector(state=>state.data);
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(fetchUsers());    
  },[]);
  
  const handleSingleUserRequest = async (index) => {
    setIsLoading(true);
    const response = await axios.get(`https://reqres.in/api/users/${index}`);
    setIsLoading(false);
    setCurrentUser(response.data.data);
  }
  
  return (
    <div>
      {isLoading
      ?<Loading />
      :(!currentUser?<UserPlaceHolder />: <SingleUser data={currentUser}/>)
      }
      <h2 className=' ml-2 nav-header'>User's List</h2>
      {
        usersFromStore.map((user,id)=>{
          return <span key={id}>
            <button className='btn btn-primary user-button m-2' type='button' onClick={()=>handleSingleUserRequest(id+1)} >{id+1}</button>
          </span>
        })
      }
    </div>
  )
}

export default UserDetail;