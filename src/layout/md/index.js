import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Glass, ShortcutIcon, Drawer } from "component";
import { Clock } from "component/widgets";
import Header from "../header";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
  },
  header: {
    padding: 10,
    height: 70,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    zIndex: 10,
  },
  container: {
    height: "calc(100% - 140px)",
    // overflow: "auto",
  },
  leftPane: {
    padding: 10,
    alignContent: "start",
  },
  rightPane: {
    padding: 10,
    alignContent: "start",
  },
  footer: {
    padding: 10,
    height: 70,
    width: "100%",
  },
  shortcutContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function MDLayout(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.header}>
        <Grid item xs={12} sm={4} md={3}>
          <Header />
        </Grid>
      </Grid>
      <Grid container className={classes.container}>
        <Grid
          item
          container
          xs={4}
          sm={4}
          md={4}
          className={classes.leftPane}
          spacing={1}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Clock />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={4}
          sm={4}
          md={4}
          className={classes.rightPane}
          spacing={1}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Glass>
              <Clock />
            </Glass>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        alignItems='center'
        justify='center'
        className={classes.footer}
      >
        <Grid item xs={10} sm={10} md={10}>
          <Glass dense>
            <div className={classes.shortcutContainer}>
              <ShortcutIcon />
              <ShortcutIcon />
              <ShortcutIcon />
            </div>
          </Glass>
        </Grid>
      </Grid>
    </div>
  );
}

export default React.memo(MDLayout);
