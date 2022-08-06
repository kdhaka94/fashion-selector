import React from "react";
import { ProductItem } from "./elements/ProductItem";
import classes from "./styles.module.css";

let arr: number[] = [];

for (let i = 0; i <= 20; i++) {
  arr.push(i);
}

export const Products = () => {
  return (
    <div className={classes.container}>
      {arr.map((val) => (
        <ProductItem />
      ))}
    </div>
  );
};
