import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Glass, ShortcutIcon } from "component";
import Header from "../header";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    margin: 0,
  },
  header: {
    height: 70,
    width: "100%",
  },
  container: {
    padding: 10,
    height: "calc(100% - 140px)",
    alignContent: "start",
    width: "100%",
  },
  footer: {
    padding: 10,
    height: 70,
  },
  shortcutContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function XSLayout(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.header}>
        <Grid item xs={12} sm={12} md={12}>
          <Header />
        </Grid>
      </Grid>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={12} md={12}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <ShortcutIcon />
            <ShortcutIcon />
            <ShortcutIcon />
            <ShortcutIcon />
            <ShortcutIcon />
            <ShortcutIcon />
            <ShortcutIcon />
            <ShortcutIcon />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems='center'
        justify='center'
        className={classes.footer}
      >
        <Grid item xs={12} sm={12} md={12}>
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

export default React.memo(XSLayout);
