import { SIDEBAR_ACTIVES } from "@components/common/Sidebar";
import { Container } from "@components/Container";
import { Profile } from "@components/Profile";
import React from "react";

export const ProfilePage = () => {
  return (
    <Container bgColor="#f7faff" layout={{ active: SIDEBAR_ACTIVES["OSP"] }}>
      <Profile />
    </Container>
  );
};
