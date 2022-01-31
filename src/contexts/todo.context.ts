import { createContext } from "react";
import TodoItem from "../models/TodoItem";

interface ITodoContext {
    todos: TodoItem[],
    setTodos: (t: TodoItem[]) => void
    loading: boolean
    setLoading: (loading: boolean) => void
}

const defaultState = {
    todos: [],
    loading: false,
    setTodos: () => {},
    setLoading: () => {}

};

export const TodoContext = createContext<ITodoContext>(defaultState);