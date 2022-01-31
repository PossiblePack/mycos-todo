import { ListItem, ListItemText, ListItemButton } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

import TodoItem from "../models/TodoItem";
import useTodoForm from '../hooks/useTodoForm';
import TodoAsyncButton from "./TodoAsyncButton";

export interface TodoProps {
    todoItem: TodoItem;
}

function Todo(props: TodoProps) {
    const [getTodos, , updateTodoItem, removeTodoItem] = useTodoForm();

    const checkTodoHandle = async (id: number) => {
        if (id) {
            await updateTodoItem(id);
            await getTodos();
        }
    }

    const removeTodoHandle = async (id: number) => {
        if (id) {
            await removeTodoItem(id);
            await getTodos();
        }
    }

    return (
        <ListItem style={{ backgroundColor: (props.todoItem.status ? "lightgreen" : "") }}>
            <ListItemButton>
                <ListItemText>
                    {props.todoItem.text}
                </ListItemText>
                <TodoAsyncButton onAsyncHandleClick={() => checkTodoHandle(props.todoItem.id)}>
                    <CheckIcon color={"primary"} />
                </TodoAsyncButton>
                <TodoAsyncButton onAsyncHandleClick={() => removeTodoHandle(props.todoItem.id)}>
                    <ClearIcon color={"error"} />
                </TodoAsyncButton>
            </ListItemButton>
        </ListItem>
    );
}

export default Todo;