import React from 'react'
import todoImage from "../image/todo.svg"

function Header() {
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center">
        <img src={todoImage} alt="head image" className='img-fluid' style={{height:'150px',width:'200px'}}/>
        
    </div>
    <h1 className='text-center'>Just do it..</h1>
    </>
  )
}

export default Header