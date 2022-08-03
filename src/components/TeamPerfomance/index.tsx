import { FilterHeader } from "@components/common";
import { Header } from "@components/Header";
import { ReviewHeader } from "@components/ReviewTheme/elements/ReviewHeader";
import React from "react";
import { Statistics } from "./elements/Statistics";
import { MemberDataTable } from "./elements/TeamDataTable";

export const TeamPerformance = () => {
  return (
    <div>
      <Header />
      <div style={style}>
        <FilterHeader headerName="Team Performance" />
        <MemberDataTable />
        <Statistics />
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
