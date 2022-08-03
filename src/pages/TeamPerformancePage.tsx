import { SIDEBAR_ACTIVES } from "@components/common/Sidebar";
import { Container } from "@components/Container";
import { TeamPerformance } from "@components/TeamPerfomance";
import React from "react";

export const TeamPerformancePage = () => {
  return (
    <>
      <Container
        bgColor="#f7faff"
        layout={{ active: SIDEBAR_ACTIVES["Team Performance "] }}
      >
        <TeamPerformance />
      </Container>
    </>
  );
};
