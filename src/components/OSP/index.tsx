import { Typography } from "@components/common";
import { Header } from "@components/Header";
import React from "react";
import { Orders } from "./elements/Orders";
import { Statistics } from "./elements/Statistics";

export const OSP = () => {
  return (
    <div>
      <Header />
      <div style={style}>
        <Typography variant="h2">Order Selection Percentage</Typography>
        <Orders />
        <Statistics />
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
