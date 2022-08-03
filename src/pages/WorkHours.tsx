import { SIDEBAR_ACTIVES } from "@components/common/Sidebar";
import { Container } from "@components/Container";
import { WorkHours } from "@components/WorkHours";
import React from "react";

export const WorkHoursPage = () => {
  return (
    <Container
      bgColor="#f7faff"
      layout={{ active: SIDEBAR_ACTIVES["Work Hours"] }}
    >
      <WorkHours />
    </Container>
  );
};
