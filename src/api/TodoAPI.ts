import axiosInstance from "../helpers/axios";
import TodoItem from "../models/TodoItem";

const TodoAPI = {
    getTodoItems: () => {
        return axiosInstance.get<TodoItem[]>("api/todos");
    },
    addTodoItem: (item: TodoItem) => {
        return axiosInstance.post("api/add", {
            id: item.id,
            text: item.text,
            status: item.status
        });
    },
    updateTodoItem: (itemId: number) => {
        return axiosInstance.put("api/update", {
            id: itemId,
            status: true
        });
    },
    removeTodoItem: (itemId: number) => {
        return axiosInstance.delete(`api/delete/${itemId}`);
    },
}

export default TodoAPI;