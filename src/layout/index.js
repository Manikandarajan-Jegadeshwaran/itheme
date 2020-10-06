import React from "react";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import XS from "layout/xs";
import SM from "layout/sm";
import MD from "layout/md";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
  },
}));

function Layout(props) {
  const theme = useTheme();
  const classes = useStyles();
  const xs = useMediaQuery(theme.breakpoints.up("xs"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div className={classes.root}>{md ? <MD /> : sm ? <SM /> : <XS />}</div>
  );
}

export default React.memo(Layout);
