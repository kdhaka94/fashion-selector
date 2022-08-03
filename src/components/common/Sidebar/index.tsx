import { useStore } from "@utils/zustand";
import { AnimatePresence, motion } from "framer-motion";
import { Image } from "../Image";
import { Typography } from "../Typography";
import classes from "./styles.module.css";

const LINKS = [
  {
    icon: "/assets/images/case-icon.webp",
    name: "Work Hours",
    link: "/work-hours",
  },
  { icon: "/assets/images/cart-icon.webp", name: "OSP", link: "" },
  {
    icon: "/assets/images/bell-icon.webp",
    name: "Notification",
    link: "/notifications",
  },
  {
    icon: "/assets/images/performance-icon.webp",
    name: "Team Performance",
    link: "/",
  },
  { icon: "/assets/images/logout-icon.webp", name: "Logout", link: "/login" },
];

export enum SIDEBAR_ACTIVES {
  "Work Hours" = 0,
  "OSP" = 1,
  "Notification" = 2,
  "Team Performance" = 3,
  "Logout" = 4,
}

const DRAWER_WIDTH = "258px";

export const Sidebar = ({
  active = SIDEBAR_ACTIVES["Work Hours"],
}: {
  active?: SIDEBAR_ACTIVES;
}) => {
  const open = useStore((state) => state.sidebarOpen);

  if (!open) {
    return <></>;
  }

  return (
    <AnimatePresence>
      <motion.div
        layout
        style={{ width: !open ? 0 : DRAWER_WIDTH }}
        transition={{
          duration: 1,
        }}
        className={classes.sidebar}
      >
        <div className={classes.container}>
          {LINKS.map((item, index) => (
            <SidebarItem item={item} active={index === active} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const SidebarItem = ({
  item,
  active,
}: {
  item: { icon: string; name: string; link: string };
  active: boolean;
}) => (
  <a href={item.link} className={classes.link}>
    <div className={`${classes.sidebarItem} ${active && classes.active}`}>
      <Image src={item.icon} alt="" width={24} height={24} />
      <Typography variant="h4" color="#000">
        {item.name}
      </Typography>
    </div>
  </a>
);
