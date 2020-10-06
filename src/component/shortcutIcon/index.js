import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 30,
    padding: 7,
    background: "#fff",
    borderRadius: 15,
    fontSize: "1rem",
    margin: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
  },
}));

function ShortcutIcon(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AcUnitIcon />
    </div>
  );
}

export default React.memo(ShortcutIcon);
