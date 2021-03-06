import React from 'react'

function SingleUser({data}) {
  return (
    <div>
      <h2 className='nav-header ml-2'>User Detail</h2>
      <div className='row justify-content-around mb-5'>
         <div className='col-md-3 col-10 card shadow rounded p-3 mt-md-0 mt-2 user'>
            <img src={data.avatar} alt='Profile Pic for User' />
         </div>
         <div className='col-md-8 col-10 text-left p-5 card shadow rounded p-3 user-detail user-card-dashboard'>
           <h2>Name: {data.first_name} {data.last_name}</h2>
           <hr />
           <h2>Email Id: {data.email}</h2>
           <hr />
           <h2>User Id: {data.id}</h2>
         </div>
      </div>
    </div>
  )
}

export default SingleUser