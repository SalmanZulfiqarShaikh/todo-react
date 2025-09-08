import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {id: 1, title: "Sample ToDo", completed: false}
    ],
    addTodo: (title) => {},
    editTodo: (id, title) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
});



export const useToDoContext = () => {
      return useContext(ToDoContext)
};

export const ToDoProvider =  ToDoContext.Provider;