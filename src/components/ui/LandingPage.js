import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import animationData from "../../animations/landinganimation/data";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em"
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em"
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
  [theme.breakpoints.down("xs")]: {
    marginLeft: 0
  }
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange
  },
  subtitle: {
    marginBotton: "1em"
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25
    }
  }
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Grid container className={classes.mainContainer} direction="column">
        <Grid item >{/*-----Hero Block-----*/}
          <Grid
            container
            justify="flex-end"
            alignItems="center"
            direction="row"
          >
            <Grid 
              item 
              sm
              className={classes.heroTextContainer}
            >
              <Typography variant="h2" align="center">
                Bringing West Coast Technology
                <br />
                to the South-East
              </Typography>
              <Grid
                container
                className={classes.buttonContainer}
                justify="center"
              >
                <Grid item>
                  <Button
                    className={classes.estimateButton}
                    variant="contained"
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.learnButtonHero}
                    variant="outlined"
                  >
                    <span stye={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.animation} item sm>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {" "}
          {/*-----Services Block-----*/}
          <Grid container direction="row" justify={matchesSM ? "center" : undefined} 
          className={classes.serviceContainer}>
              <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                <Typography variant="h4">
                  Custom Software Development
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Save Energy. Save Time. Save Money.
                </Typography>
                <Typography variant="subtitle1">
                  Complete digital solutions, from investigation to{" "}
                   <span className={classes.specialText}>celebration.</span>
                </Typography>
                <Button variant="outlined" className={classes.learnButton}>
                <span stye={{ marginRight: 10, marginTop: matchesSM ? "2em" : undefined }}>Learn More</span>
                <ButtonArrow 
                  width={10} 
                  height={10}
                  fill={theme.palette.common.blue}
                />
                </Button>
              </Grid>
              <Grid item>
                <img className={classes.icon} alt="custom software icon" src={customSoftwareIcon} />
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
