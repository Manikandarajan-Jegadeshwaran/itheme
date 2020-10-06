import React, { useEffect, useState } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: "#ffffff00",
    color: "red",
    backdropFilter: "saturate(180%) blur(20px)",
  },
}));

function Drawer(props) {
  const { openDrawer, onToggle } = props;
  const [open, setOpen] = useState(openDrawer);

  const classes = useStyles();

  useEffect(() => {
    setOpen(openDrawer);
  }, [openDrawer]);

  const toggleDrawer = (event, flag) => {
    if (
      event?.type === "keydown" &&
      (event?.key === "Tab" || event?.key === "shift")
    ) {
      return;
    }

    setOpen(flag);
    onToggle(flag);
  };

  const handleOpen = (e) => toggleDrawer(e, true);

  const handleClose = (e) => toggleDrawer(e, false);

  return (
    <SwipeableDrawer
      anchor='left'
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      classes={{
        paper: classes.paper,
      }}
      BackdropProps={{ invisible: true }}
      PaperProps={{ elevation: 2 }}
      disableBackdropTransition
      disableDiscovery
    >
      <span style={{ width: 300 }}>asdf</span>
    </SwipeableDrawer>
  );
}

export default React.memo(Drawer);
