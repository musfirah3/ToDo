import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid";
import {MdFormatListBulletedAdd} from "react-icons/md"

function Form({todo,setTodo}) {
  const [input, setinput] = useState()

  

  const AddToDo = (e) => {
    e.preventDefault()
    const payload = { input }
    console.log(payload)
    setTodo([...todo,{id:uuidv4(),title:input,completed:false}])
    setinput("")
  }

  return (
    <form onSubmit={AddToDo}>
      <div className="mb-3 d-flex" style={{ width: '75vh' }}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="inputTask"
            placeholder='Enter your input...'
            value={input}
            onChange={(e) => setinput(e.target.value)}

          />
          <button className='btn btn-warning p-2'>Add<MdFormatListBulletedAdd/></button>
        </div>
      </div>
    </form>

  )
}

export default Form