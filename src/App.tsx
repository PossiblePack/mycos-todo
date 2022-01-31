import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Container, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import AppBar from "./components/AppBar";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import TodoItem from "./models/TodoItem";
import './App.css';

import { TodoContext } from "./contexts/todo.context";

const useStyles = makeStyles({
    margin: {
        margin: 10
    },
    noPadding: {
        padding: 0
    },
    padingTop: {
        paddingTop: 20
    }
});

function App() {
    const classes = useStyles();
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <TodoContext.Provider value={{ 
                todos: todos, 
                loading: loading,
                setTodos: setTodos,
                setLoading: setLoading
                }}>
            <div style={{ backgroundColor: `rgb(246, 243, 238)`, width: '100vw', height: '100vh' }}>
				<div style={{ backgroundImage: `url(${require("./images/todolist-bg.png")})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: 'null', height: '100vh' }}>
                	<CssBaseline />
	                <AppBar />
	                <Container fixed style={{ marginTop: 50, overflow: 'auto' }}>
	                    <Box className={classes.margin}>
	                        <Grid container className={classes.noPadding}>
	                            <Grid item>
	                                <TodoForm />
	                            </Grid>
	                        </Grid>
                            <Grid container className={classes.padingTop}>
                                <Grid item>
                                    <Typography variant="h5" gutterBottom component="div" style={{ width: "100vh" }}>
                                        Todo List
                                    </Typography>
                                    <Todos />
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </div>
            </div>
        </TodoContext.Provider>

    );
}

export default App;
