import { useCallback, useContext } from "react";
import { TodoContext } from "../contexts/todo.context";

import todoApi from "../api/TodoAPI";
import TodoItem from "../models/TodoItem";


const useTodoForm = () => {
    const { setTodos } = useContext(TodoContext);

    const getTodos = useCallback(async () => {
        let response = await todoApi.getTodoItems();
        if (response) {
            if (response.data && response.data.length > 0) {

                setTodos(response.data)
            }
        }
    }, [setTodos]);

    const addTodoItem = useCallback(async (item: TodoItem) => {
        let response = await todoApi.addTodoItem(item);
        return response;
    }, []);

    const updateTodoItem = useCallback(async (id: number) => {
        let response = await todoApi.updateTodoItem(id);
        return response;
    }, []);

    const removeTodoItem = useCallback(async (id: number) => {
        let response = await todoApi.removeTodoItem(id);
        return response;
    }, []);

    return [getTodos, addTodoItem, updateTodoItem, removeTodoItem] as const;
}

export default useTodoForm;