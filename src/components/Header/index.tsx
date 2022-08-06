import { Avatar, IconButton } from "@mui/material";
import classes from "./styles.module.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useStore } from "@utils/zustand";
import { Sidebar } from "@components/common/Sidebar";
export const Header = ({
  username = "Kuldeep",
  profileImage = "https://mui.com/static/images/avatar/1.jpg",
  headerName = "Fashion Selector",
}) => {
  const open = useStore((state) => state.sidebarOpen);
  const toggleSidebar = useStore((state) => state.toggleSidebar);

  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.heading}>
          <IconButton onClick={toggleSidebar}>
            {open ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
          </IconButton>
          {headerName}
        </div>
        <div className={classes.userInfoContainer}>
          Hi {username},{" "}
          <span>
            Welcome back
            <Avatar alt={username} src={profileImage} />
          </span>
        </div>
      </div>
    </>
  );
};
