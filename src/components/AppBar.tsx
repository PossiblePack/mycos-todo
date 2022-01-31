import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

function AppBarComponent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Todo Application
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppBarComponent;