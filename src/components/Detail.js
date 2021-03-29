import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';


import { AuthContext } from '../store/Auth';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Detail(props) {
    const classes = useStyles();
    const repos = useContext(AuthContext).repos;
    const selectedRepo = repos.find(repo => repo.id === props.id)
    const moment = require('moment'); // require
    return (
        <Dialog fullScreen open={props.open} onClose={props.handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={props.handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {selectedRepo.name}
                    </Typography>

                </Toolbar>
            </AppBar>
            <List>
                <ListItem>
                    <ListItemText primary="Repo Name" secondary={selectedRepo.name || "--"} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Description" secondary={selectedRepo.description || "--"} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Collaborators" secondary={selectedRepo.collaborators_url || "--"} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Link to Github Repo" secondary={selectedRepo.git_url || "--"} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Created Date" secondary={moment(selectedRepo.created_at).format("DD-MMM-YYYY") || "--"} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Link to issues page on Github" secondary={selectedRepo.issues_url || "--"} />
                </ListItem>
                <Divider />
            </List>
        </Dialog>
    );
}
