import { Header } from "@components/Header";
import React from "react";
import { Filters } from "./elements/Filters";
import { ImageSlider } from "./elements/ImageSlider";
import { Products } from "./elements/Products";
import { SingleThemeInfo } from "./elements/SingleThemeInfo";
import classes from "./styles.module.css";

export const Profile = () => {
  return (
    <div>
      <Header headerName="My Profile" />
      <div style={style}>
        <Products />
        <div className={classes.row} >
          <div className={classes.column1}>
            <SingleThemeInfo />
          </div>
          <div className={classes.column2}>
            <ImageSlider />
          </div>
          <div className={classes.column3}>
              <Filters />
          </div>
        </div>
      </div>
    </div>
  );
};

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  padding: "60px",
};
