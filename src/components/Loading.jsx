import React from 'react'

function Loading() {
  return (
    <div className='row justify-content-center'>
       <div className='col-8 text-center'>
          <p>Fetching Your Data...</p>
          <div className='fetching-data'></div>
       </div>
    </div>
  )
}

export default Loading