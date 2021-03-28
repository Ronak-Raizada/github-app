import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { AuthContext } from '../store/Auth';
import {
  useHistory,
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MainAppBar() {
  const classes = useStyles();
  const logOut = useContext(AuthContext).logout;
  let history = useHistory();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Github App
          </Typography>
          <Button variant="contained" onClick={()=>logOut(()=>history.push("/"))}>Log Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
