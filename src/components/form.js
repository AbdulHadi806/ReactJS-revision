import React, { useContext, useState } from 'react'
import { GLOBALCONTEXT } from '../context/context'

function Form() {
    const [state, setState] = useState("")
    const {addTodo, todolist} = useContext(GLOBALCONTEXT)
    const inputHandler = (e) => {
        setState(e.target.value)
    }
    const addTodoHandler = (e) => {
        e.preventDefault()
        addTodo({id: todolist.length + 1, task: state, completed:false})   
    }
  return (
    <form onSubmit={addTodoHandler}>
      <input value={state} type='text' onChange={inputHandler} />
      <button type="Submit" className='submit-btn'>Submit Todo</button>
    </form>
  )
}

export default Form
