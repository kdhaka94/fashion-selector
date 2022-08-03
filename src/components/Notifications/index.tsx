import { FilterHeader, Typography } from "@components/common";
import { Header } from "@components/Header";
import React from "react";

export const Notifications = () => {
  return (
    <div>
      <Header />
      <div style={style}>
        <Typography variant="h2">Notifications</Typography>

      </div>
    </div>
  );
};

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  padding: "60px",
};

