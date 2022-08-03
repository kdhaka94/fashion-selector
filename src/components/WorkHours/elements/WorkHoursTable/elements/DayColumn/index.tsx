import { Typography } from "@components/common";
import classes from "./styles.module.css";

export const DayColumn = ({
  day = 0,
  hours = 0,
  selection = 0,
  reason = "",
  bgColor = "white",
}) => {
  return (
    <div className={classes.container} style={{ backgroundColor: bgColor }}>
      <div>
        <Typography variant="h4" className={classes.day}>
          {day < 10 ? "0" + day : day}
        </Typography>
      </div>
      <div className={classes.subContainer}>
        <Typography variant="h3">{reason ? reason : hours + "h"}</Typography>
        <div className={classes.selectionContainer}>
          <span className={classes.bluedot}></span>
          <Typography className={classes.selection}>{selection}</Typography>
        </div>
      </div>
    </div>
  );
};
