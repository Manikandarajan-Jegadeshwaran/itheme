import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Search } from "component/widgets";
import { Drawer } from "component";

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

function Header(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();

  const handleMenuClick = (e) => setOpenDrawer(true);
  const handleDrawerToggle = (flag) => setOpenDrawer(flag);

  return (
    <>
      <Search onMenuClick={handleMenuClick} />
      <Drawer openDrawer={openDrawer} onToggle={handleDrawerToggle} />
    </>
  );
}

export default React.memo(Header);
