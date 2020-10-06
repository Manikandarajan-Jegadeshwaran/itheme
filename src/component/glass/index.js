import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#ffffff80",
    backdropFilter: "saturate(180%) blur(20px)",
    borderRadius: 15,
    padding: (props) => (props?.dense ? 0 : 5),
    width: (props) => props?.fullWidth && "100%",
  },
}));

function Glass(props) {
  const classes = useStyles(props);
  return <div className={classes.root}>{props.children}</div>;
}

export default React.memo(Glass);
