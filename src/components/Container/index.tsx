import { Sidebar, SIDEBAR_ACTIVES } from "@components/common/Sidebar";
import classes from "./styles.module.css";

export const Container = ({
  children,
  bgColor = "white",
  layout,
}: {
  children: React.ReactNode;
  bgColor?: string;
  layout?: { active: SIDEBAR_ACTIVES };
}) => {
  if (layout) {
    return (
      <div className={classes.layoutContainer}>
        <Sidebar active={layout.active} />
        <div className={classes.container} style={{ backgroundColor: bgColor }}>
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className={classes.container} style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
};
