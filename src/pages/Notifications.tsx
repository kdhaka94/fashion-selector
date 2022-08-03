import { SIDEBAR_ACTIVES } from "@components/common/Sidebar";
import { Container } from "@components/Container";
import { Notifications } from "@components/Notifications";
import React from "react";

export const NotificationsPage = () => {
  return (
    <Container
      bgColor="#f7faff"
      layout={{ active: SIDEBAR_ACTIVES["Notification"] }}
    >
      <Notifications />
    </Container>
  );
};
