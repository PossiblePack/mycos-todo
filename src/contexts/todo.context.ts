import { createContext } from "react";
import TodoItem from "../models/TodoItem";

interface ITodoContext {
    todos: TodoItem[],
    setTodos: (t: TodoItem[]) => void
}

const defaultState = {
    todos: [],
    setTodos: () => {}
};

export const TodoContext = createContext<ITodoContext>(defaultState);