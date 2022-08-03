import { FilterHeader } from "@components/common";
import { Header } from "@components/Header";
import React from "react";
import { WorkHoursTable } from "./elements/WorkHoursTable";

export const WorkHours = () => {
  return (
    <div>
      <Header />
      <div style={style}>
        <FilterHeader headerName="Work Hours" />
        <WorkHoursTable />
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
