import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

function Dashboard() {
  
  const numberOfCakes = useSelector(state=>state.numberOfCakes);
  return (
    <div>
     {numberOfCakes}
    </div>
  )
}

export default Dashboard