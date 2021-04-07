import React from 'react';
import {
  HashRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Login from '../Login'
import Signup from '../signup'
import Dashboard from '../Dashboard/Dashboard'
// import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      // flexShrink: 2,
      display: 'none'
    },
  },
  title: {
    flexGrow: 1,
  },
  styleLink: {
    color: 'white',
    textDecoration: 'none',
    // [theme.breakpoints.up('sm') ]: {
    //   display: 'none'
    // },
    
    [theme.breakpoints.down('xs') ]: {
      display: 'none'
    },
  },

  //   navBar: {
  //     backgroundColor: 'black',
  //   },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>

        <AppBar className={classes.navBar} position="static">
            <Toolbar >
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6"  className={classes.title}>
                Logo
              </Typography>
              <Link className={classes.styleLink} to='/'>
                <Button color="inherit">Login</Button>
              </Link>
              <Link className={classes.styleLink} to='/signup'>
                <Button color="inherit">Signup</Button>
              </Link>
              <Link className={classes.styleLink} to='/dashboard'>
                <Button color="inherit">Dashboard</Button>
              </Link>
            </Toolbar>
        </AppBar>
        <>
          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            {/* <Route></Route> */}
          </Switch>
        </>
      </Router>

    </div>
  );
}
