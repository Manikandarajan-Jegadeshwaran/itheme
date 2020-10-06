import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Glass, ShortcutIcon } from "component";
import { Clock } from "component/widgets";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
  },
  header: {
    border: "1px solid",
    padding: 10,
    height: 100,
    width: "100%",
  },
  leftPane: {
    padding: 10,
    height: "calc(100% - 220px)",
    width: "35%",
    alignContent: "start",
  },
  container: {
    padding: 10,
    height: "calc(100% - 220px)",
    width: "67%",
    alignContent: "start",
  },
  footer: {
    padding: 10,
    height: 120,
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
        <Grid item>header</Grid>
      </Grid>
      <Grid container className={classes.leftPane} spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <Glass>
            <Clock />
          </Glass>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Glass>
            <Clock />
          </Glass>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Glass>
            <Clock />
          </Glass>
        </Grid>
      </Grid>
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <Glass>
            <Clock />
          </Glass>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Glass>
            <Clock />
          </Glass>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems='center'
        justify='center'
        className={classes.footer}
      >
        <Grid item xs={10} sm={10} md={10}>
          <Glass>
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
