import React, { useState } from "react";
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

import useTodoForm from '../hooks/useTodoForm';
import TodoItem from "../models/TodoItem";

const useStyles = makeStyles({
    margin: {
        margin: 10,
        width: 700
    },
    noPadding: {
        padding: 0
    },
    buttonContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    fullWidth: {
        width: "100%"
    }
});

function TodoForm() {
    const classes = useStyles();
    const [text, setText] = useState<string>("");
    const [getTodos, addTodoItem] = useTodoForm();
const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const changeNoteHandler = (e: any) => {
        setText(e.currentTarget.value);
    }

    const submitTodoHandle = async (e: any) => {
        e.preventDefault()
        setIsSubmitting(true)
        var newObj: TodoItem = {
            id: 0,
            text: text,
            status: false
        };

        try {
            var response = await addTodoItem(newObj);
            if (response && response.status === 200) {
                getTodos();
                clearTextField();
            }
        } catch (err) {
            window.alert("Something went wrong!");
        } finally {
            setIsSubmitting(false)
        }
    }

    const clearTextField = () => {
        setText("");
    }

    return (
        <Box className={classes.margin}>
            <form onSubmit={submitTodoHandle}>
                <Box style={{ marginBottom: 20 }}>
                    <Stack direction="column" spacing={2}>
                        <TextField
                            label="Add new todo item here"
                            value={text}
                            className={classes.fullWidth}
                            inputProps={{ maxLength: 300 }}
                            onChange={changeNoteHandler}
                        />
                    </Stack>
                    <Stack direction="row" spacing={2} marginTop={2}>
                        <Button type="submit"
                            disabled={isSubmitting}
                            variant="contained" startIcon={<AddIcon />}>
                            {isSubmitting ? 'Submitting... ' : 'Add'}
                        </Button>
                        <Button 
                            disabled={isSubmitting}
                            variant="outlined" startIcon={<ClearIcon />} onClick={clearTextField}>
                            Clear
                        </Button>
                    </Stack>
                </Box>
            </form>
        </Box>
    );
}

export default TodoForm;