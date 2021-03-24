import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import MainAppBar from './AppBar'
import List from './List'

export default function MasterPage(props) {
  return (
    <React.Fragment>
      <MainAppBar setToken = {props.setToken}/>
      <Container fixed style={{marginTop:'20px'}}>
        <List/>
      </Container>
    </React.Fragment>
  );
}