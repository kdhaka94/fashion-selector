import { Typography } from "@components/common";
import { Header } from "@components/Header";
import React from "react";
import { Products } from "./elements/Products";

export const Profile = () => {
  return (
    <div>
      <Header headerName="My Profile" />
      <div style={style}>
        <Products />
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
