import React, { useContext } from 'react'
import { GLOBALCONTEXT } from '../context/context'

function Todos() {
  const {todolist, deleteTodo, completeTodo} = useContext(GLOBALCONTEXT)
  const todoDeleteHandler = (id) => {
    deleteTodo(id)
  }
  const completeTodoHandler = (id) => {
    console.log(todolist)
    completeTodo(id)
  }

  return (
    <ul>
      {
        todolist.map((items) => {
          return (
            <li style={{margin: "20px 0 0 0"}} key={items.id}>
              <span className={items.completed ? "completed-word": ""}>{items.task}</span>
              <div>
                <button className={items.completed? "button-disabled":""} style={{fontSize: "16px", height: '36px'}} onClick={e => {e.preventDefault();completeTodoHandler(items.id)}}>Complete</button>
                <button style={{fontSize: "16px", height: '36px', marginLeft: "15px"}} onClick={e => {e.preventDefault();todoDeleteHandler(items.id)}}>Delete</button>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Todos
