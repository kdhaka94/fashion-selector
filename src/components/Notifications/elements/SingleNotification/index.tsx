import { Image, Typography } from "@components/common";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { IconButton } from "@mui/material";
import classes from "./styles.module.css";
import { NOTIFICATION_VARIANTS } from "./types";

export type INotificationInputProps = {
  variant: keyof typeof NOTIFICATION_VARIANTS;
  text: string;
  time?: string;
};

export const SingleNotification = ({
  variant,
  text,
  time,
}: INotificationInputProps) => {
  return (
    <div
      className={classes.container}
      style={{
        backgroundColor: NOTIFICATION_VARIANTS[variant].colors.background,
        border: `1px solid ${NOTIFICATION_VARIANTS[variant].colors.border}`,
      }}
    >
      <div className={classes.notificationInfo}>
        <Image src={NOTIFICATION_VARIANTS[variant].icon} width={18} />
        <Typography
          variant="h4"
          color={NOTIFICATION_VARIANTS[variant].colors.text}
        >
          {NOTIFICATION_VARIANTS[variant].heading}
        </Typography>
        <Typography variant="caption" color="#242424">
          {text}
        </Typography>
      </div>
      <div className={classes.notificationActions}>
        <Typography variant="caption">{time}</Typography>
        <IconButton>
          <MoreVertRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
};
