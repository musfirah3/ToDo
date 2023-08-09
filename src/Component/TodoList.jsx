import React from 'react'
import { BsFillClipboard2CheckFill } from 'react-icons/bs'
import { FaEdit, FaTrash } from 'react-icons/fa'


function TodoList({ todo, setTodo }) {
    return (
        <>
        
            <ul className='list-group list-group-flush rounded' style={{ width: '75vh' }}>
                
                {
                    todo.map((todo) => (

                        <li className='list-group-item' key={todo.id} >
                            <div className="input-group">
                            <input
                                className='form-control'
                                type="text"
                                value={todo.title}
                                onChange={(e) => {
                                    e.preventDefault();
                                }}
                            />
                            <div>
                                <div className="btn">
                                    <BsFillClipboard2CheckFill />
                                </div>
                                <div className="btn">
                                    <FaEdit />
                                </div>
                                <div className="btn">
                                    <FaTrash />
                                </div>
                            </div>
                            </div>
                        </li>

                    ))
                }
                
            </ul>
        



        </>
    )
}

export default TodoList