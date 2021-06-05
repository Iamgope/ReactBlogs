import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import classes from './Navbar.module.css'
import{ makeStyles} from '@material-ui/core/styles'
function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

const useStyles=makeStyles({
  root:{
      background:"#6c05fc",
  }
})
const Navbar=(props)=>{
    const Classes=useStyles();
  return<React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar color='inherit' className={Classes.root}>
          <Toolbar>
            <Typography variant="h6">hello</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    

  </React.Fragment>
}

export default Navbar;