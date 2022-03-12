import React from 'react'
import '../App.css'
function UserPlaceHolder() {
  return (
    <div className='row justify-content-center mb-5'>
       <div className='col   text-center text-center p-3'>
          <p className='nav-header'>Select a User From User List to get Details</p> 
            <div className='select-user-card'></div>
       </div>
    </div>
  )
}

export default UserPlaceHolder