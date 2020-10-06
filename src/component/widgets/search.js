import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";

import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import Glass from "../glass";
import ShotcutIcon from "../shortcutIcon";

const Sample = ["Home", "Setting", "Profile", "Report"];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: 300,
    flexDirection: "column",
    zIndex: 1000,
    borderRadius: 10,
  },
  inputCtr: {
    padding: "0 2px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    color: "#fff",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    paddingLeft: 5,
  },
  iconButton: {
    padding: 10,
  },
  result: {
    display: "flex",
    padding: 3,
    alignItems: "center",
    "& span": {
      paddingLeft: 10,
    },
  },
}));

function Search(props) {
  const { onMenuClick } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const classes = useStyles();

  const results = () => {
    if (searchQuery === "") {
      return [];
    }
    let sa = Sample?.filter(
      (each) => each.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1
    );

    return sa;
  };

  const handleMenuClick = (e) => {
    if (onMenuClick) {
      onMenuClick(e);
    }
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClear = () => setSearchQuery("");

  return (
    <Glass className={classes.root} dense>
      <div className={classes.inputCtr}>
        <IconButton
          color='inherit'
          className={classes.iconButton}
          aria-label='directions'
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <InputBase
          value={searchQuery}
          className={classes.input}
          placeholder='Search Application'
          inputProps={{ "aria-label": "search Application" }}
          onChange={handleSearchQueryChange}
        />
        <IconButton
          color='inherit'
          className={classes.iconButton}
          aria-label='directions'
          onClick={handleClear}
        >
          <ClearIcon />
        </IconButton>
      </div>
      {results().map((each, idx) => {
        return (
          <React.Fragment key={each}>
            <Divider />

            <div className={classes.result}>
              <ShotcutIcon />
              <span>{each}</span>
            </div>
          </React.Fragment>
        );
      })}
    </Glass>
  );
}

export default React.memo(Search);
