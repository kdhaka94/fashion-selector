import { Typography } from "@components/common";
import React from "react";
import {
  INotificationInputProps,
  SingleNotification,
} from "../SingleNotification";
import classes from "./styles.module.css";
export const NotificationBatch = ({
  notifications,
  date,
}: {
  notifications: INotificationInputProps[];
  date: string;
}) => {
  return (
    <div className={classes.container}>
      <Typography variant="h4" color="#797979">
        {date}
      </Typography>
      <div className={classes.notificationsContainer}>
        {notifications.map((notification) => (
          <SingleNotification {...notification} />
        ))}
      </div>
    </div>
  );
};
