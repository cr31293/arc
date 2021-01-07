import React from "react";
import {makeStyles} from "@material-ui/styles";
import footerAdornment from "../../assets/Footer Adornment.svg"

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%"
  }
}));

export default function () {
  const classes = useStyles()

  return (
    <footer className={classes.footer}><img alt="black decorative slash" src={footerAdornment} /></footer>

  ) 
}