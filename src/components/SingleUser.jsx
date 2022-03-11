import React from 'react'

function SingleUser({data}) {
  return (
    <div className='row justify-content-between mb-5'>
       <div className='col-3 card shadow rounded p-3 user'>
          <img src={data.avatar} alt='Profile Pic for User' />
       </div>
       <div className='col-8 card shadow rounded p-3 user-detail'>
         <h1>Name: {data.first_name} {data.last_name}</h1>
         <h1>Email Id: {data.email}</h1>
         <h1>User Id: {data.id}</h1>
       </div>
    </div>
  )
}

export default SingleUser