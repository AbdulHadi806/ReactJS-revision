import { createContext, useReducer } from "react";
import { appReducer } from "./reducer";

export const initialState = {
    todolist: [
        {
            id: 1,
            task: "Test Task",
            completed: false,
        },
    ]
}
export const GLOBALCONTEXT = createContext(initialState);
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const addTodo = (newObj) => {
        console.log(newObj)
        dispatch({
            type: "ADDTODO",
            payload: newObj
        })
    }
    const deleteTodo = (id) => {
        dispatch ({
            type: "DELETETODO",
            payload: id
        })
    }
    const completeTodo = (id) => {
        console.log(id)
        dispatch({
            type: "TodoCompleted",
            payload: id
        })
    }
    return (
        <GLOBALCONTEXT.Provider value={{todolist: state.todolist, addTodo, deleteTodo, completeTodo}}>
            {children}
        </GLOBALCONTEXT.Provider>
    )
}
