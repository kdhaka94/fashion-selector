import { Typography } from "@components/common";
import React from "react";

export const NotificationDate = ({ date = "today" }) => {
  return (
    <div>
      <Typography variant="h3" color="#797979">
        {date}
      </Typography>
    </div>
  );
};
