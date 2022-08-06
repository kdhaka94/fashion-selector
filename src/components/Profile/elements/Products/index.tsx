import { Typography } from "@components/common";
import { motion } from "framer-motion";
import React from "react";
import { ProductItem } from "./elements/ProductItem";
import classes from "./styles.module.css";

let arr: number[] = [];

for (let i = 0; i <= 20; i++) {
  arr.push(i);
}

export const Products = () => {
  const [gender, setGender] = React.useState<"men" | "women">("men");
  return (
    <div className={classes.container}>
      <div className={classes.switchContainer}>
        <div className={classes.switch}>
          <motion.div
            className={classes.singleSwitch}
            onClick={() => setGender("men")}
          >
            <Typography
            className={classes.genderText}
              color={gender === "men" ? "#fff" : "inherit"}
              variant="h3"
            >
              Men
            </Typography>
            {gender === "men" && (
              <motion.div className={classes.switchBg} layoutId="switch" />
            )}
          </motion.div>
          <motion.div
            className={classes.singleSwitch}
            onClick={() => setGender("women")}
          >
            {gender === "women" && (
              <motion.div className={classes.switchBg} layoutId="switch" />
            )}
            <Typography
            className={classes.genderText}
              color={gender === "women" ? "#fff" : "inherit"}
              variant="h3"
            >
              Women
            </Typography>
          </motion.div>
        </div>
      </div>
      <div>
        <div className={classes.productsContainer}>
          {arr.map((_) => (
            <ProductItem />
          ))}
        </div>
      </div>
    </div>
  );
};
