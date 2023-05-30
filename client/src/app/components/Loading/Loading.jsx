import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Loading = () => {
  return (
  <div className="text-center">
    <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  )
}

export default Loading