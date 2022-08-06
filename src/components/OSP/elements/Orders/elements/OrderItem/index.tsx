import { Button, Image } from "@components/common";
import { Typography } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
export const OrderItem = ({
  img = "https://mui.com/static/images/avatar/1.jpg",
  dressType = "Western Wear",
}) => {
  return (
    <div className={classes.container}>
      <Image src={img} width={151} height={151} />
      <Button variant="outlined" size="small" className={classes.button}>
        Select 35
      </Button>
      <Button variant="outlined" size="small" className={classes.button}>
        Order 35
      </Button>
      <Typography align="center">{dressType}</Typography>
    </div>
  );
};
