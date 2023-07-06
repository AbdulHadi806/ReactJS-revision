import { initialState } from "./context";

export const appReducer = (state = initialState , {type, payload}) => {
    console.log(state)
    switch(type) {
        case "ADDTODO":
            return {...state, todolist: [...state.todolist, payload] }
        case "DELETETODO":
            return {...state, todolist: state.todolist.filter(obj => obj.id !== payload)}
        case "TodoCompleted":
                const todoListCopy = [...state.todolist];
                const todo = todoListCopy.find(item => item.id === payload);
                const index = todoListCopy.indexOf(todo);
                todoListCopy[index].completed = true;
                return {...state, todolist: todoListCopy}
        default:
            return state
    }
}