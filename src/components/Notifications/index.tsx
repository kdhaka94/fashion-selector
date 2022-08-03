import { Typography } from "@components/common";
import { Header } from "@components/Header";
import React from "react";
import { NotificationBatch } from "./elements/NotificationBatch";
import { INotificationInputProps } from "./elements/SingleNotification";

const data: INotificationInputProps[] = [
  {
    text: "This is a notification",
    variant: "error",
    time: "10 min",
  },
  {
    text: "This is a notification",
    variant: "success",
    time: "12 min",
  },
  {
    text: "This is a notification",
    variant: "warning",
    time: "40 min",
  },
];

export const Notifications = () => {
  return (
    <div>
      <Header />
      <div style={style}>
        <Typography variant="h2">Notifications</Typography>

        <NotificationBatch date="Today" notifications={data} />
        <NotificationBatch date="Yesterday" notifications={data} />
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
