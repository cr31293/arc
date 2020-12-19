import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo: {
        height: "7em" 
    },
    tabContainer: {
        marginLeft: "auto",
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    }
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
    const classes = useStyles();
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <ToolBar disableGutters>
            <img alt="company logo" src={logo} className={classes.logo} />
            <Tabs className={classes.tabContainer}>
                <Tab className={classes.tab} label="Home" />
                <Tab className={classes.tab} label="Services" />
                <Tab className={classes.tab} label="The Revolution" />
                <Tab className={classes.tab} label="About Us" />
                <Tab className={classes.tab} label="Contact Us" />

            </Tabs>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
