import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { makeStyles, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Logo from "../../static/logo.png";
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

const useStyles = makeStyles({
  root: {
    background: "#6c05fc",
  },
  button: {
    backgroundColor: "#fc0591",
    "&:hover": {
      backgroundColor: "",
    },
    color: "white",
    fontSize: 15,
    fontFamily: "Arial , sans-serrif",
  },
  buttonPos: {
    margin: "auto",
    marginRight: 30,
  },
  logo: {
    marginTop: 2,
    maxWidth: 80,
  },
  blogtext: {
    marginTop: -50,
    marginLeft: 5,
    color: "#fc0591",
    fontSize: 25,
    fontWeight: 100,
  },
});
const Navbar = (props) => {
  const Classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar color="inherit" className={Classes.root}>
          <Toolbar>
            <NavLink to="/home" exact>
              <img src={Logo} alt="logo" className={Classes.logo} />
            </NavLink>

            <div className={Classes.buttonPos}>
              <NavLink to="/create" exact>
                <Button
                  variant="outlined"
                  className={Classes.button}
                  color="secondary"
                >
                  Write
                </Button>
              </NavLink>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Navbar;
