import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 15,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    color: "#fff",
  },
  time: {
    fontSize: "2rem",
    fontWeight: "500",
  },
  meridian: {
    paddingLeft: 5,
    fontWeight: "500",
  },
  date: {
    fontWeight: "500",
  },
}));

function Clock(props) {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const time = date.toLocaleTimeString();
  let displayTime = time.split(":");
  const meridian = displayTime[2].split(" ")[1];
  displayTime = `${displayTime[0]}:${displayTime[1]}`;
  const month = monthNames[date?.getMonth()];
  const day = days[date?.getDay()];
  let toDate = date?.getDate();
  toDate = toDate > 9 ? toDate : `0${toDate}`;

  return (
    <div className={classes.root}>
      <span>
        <span className={classes.time}>{displayTime}</span>
        <span className={classes.meridian}>{meridian}</span>
      </span>
      <span>
        <span className={classes.date}>{`${day}, ${month} ${toDate}`}</span>
      </span>
    </div>
  );
}

export default React.memo(Clock);
