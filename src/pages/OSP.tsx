import { SIDEBAR_ACTIVES } from "@components/common/Sidebar";
import { Container } from "@components/Container";
import { OSP } from "@components/OSP";
import React from "react";

export const OSPPage = () => {
  return (
    <Container bgColor="#f7faff" layout={{ active: SIDEBAR_ACTIVES["OSP"] }}>
      <OSP />
    </Container>
  );
};
