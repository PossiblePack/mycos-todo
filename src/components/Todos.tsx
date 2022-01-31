import { useEffect, useState, useContext } from "react";
import { CircularProgress, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { makeStyles } from '@mui/styles';

import Todo from "./Todo";
import TodoItem from "../models/TodoItem";
import useTodoForm from '../hooks/useTodoForm';
import { TodoContext } from "../contexts/todo.context";

const useStyles = makeStyles({
    listScrollable: {
        height: "100%",
        overflow: "auto"
    },
});

function Todos() {
    const [screenHeight] = useState<number>(window.innerHeight - 200);
    const [isAllStatus, setIsAllStatus] = useState<boolean>(false);
    const [getTodos] = useTodoForm();
    const { todos, loading } = useContext(TodoContext);
    const classes = useStyles();


    useEffect(() => {
        getTodos();
    }, [getTodos]);

    const allStatusChangeHandle = () => {
        setIsAllStatus(!isAllStatus);
    }

    return (
        <Grid container>
            {loading ? <CircularProgress color="success" />
                : <Box sx={{ width: '100%', maxWidth: 500 }} style={{ maxHeight: screenHeight }}>
                    <nav aria-label="main mailbox folders" className={classes.listScrollable}>
                        <FormControlLabel labelPlacement="start" control={<Switch checked={isAllStatus} onChange={allStatusChangeHandle} />} label="All Status" />
                        <List className={`playlist-container`}>
                            {
                                (isAllStatus)
                                    ? todos.map((todo: TodoItem) => { return <Todo key={todo.id} todoItem={todo} /> })
                                    : todos.filter(s => !s.status).map((todo: TodoItem) => { return <Todo key={todo.id} todoItem={todo} /> })
                            }
                        </List>
                    </nav>
                </Box>}
        </Grid>
    );
}

export default Todos;