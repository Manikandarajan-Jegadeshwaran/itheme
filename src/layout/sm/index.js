import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    margin: 0,
  },
  header: {
    border: "1px solid",
    padding: 10,
    height: "10%",
    width: "100%",
  },
  container: {
    border: "1px solid",
    padding: 10,
    height: "80%",
  },
  footer: {
    border: "1px solid",
    padding: 10,
    height: "10%",
  },
}));

function SMLayout(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.header}>
        <Grid item>header</Grid>
      </Grid>
      <Grid container className={classes.container}>
        <Grid item>sm</Grid>
      </Grid>
      <Grid container className={classes.footer}>
        <Grid item>footer</Grid>
      </Grid>
    </div>
  );
}

export default React.memo(SMLayout);
