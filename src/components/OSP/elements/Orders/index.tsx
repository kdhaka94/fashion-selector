import React from "react";
import { OrderItem } from "./elements/OrderItem";
import classes from "./styles.module.css";

let arr: number[] = [];

for (let i = 0; i <= 20; i++) {
  arr.push(i);
}

export const Orders = () => {
  return (
    <div className={classes.container}>
      {arr.map((val) => (
        <OrderItem  />
      ))}
    </div>
  );
};
