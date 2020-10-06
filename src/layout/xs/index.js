import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Glass, ShortcutIcon } from "component";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    margin: 0,
  },
  header: {
    border: "1px solid",
    padding: 10,
    height: "8%",
    width: "100%",
  },
  container: {
    padding: 10,
    height: "80%",
    alignContent: "start",
  },
  footer: {
    padding: 10,
    height: "12%",
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
        <Grid item>header</Grid>
      </Grid>
      <Grid container className={classes.container} spacing={2}>
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

export default React.memo(XSLayout);
