import {
  AppRegistration,
  CalendarViewDay,
  EmailOutlined,
  Login,
  NotificationAdd,
  Person,
  WarningAmber,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/imgs/logo.png";
import logoDown from "../assets/imgs/logoDown.png";
import { NavItem } from "./AllMinors";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Box
      className="sidebar"
      fixed
      sx={{
        height: "100vh",
        padding: "50px 0",
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        alt="logo"
        src={logo}
        style={{
          display: "block",
          left: 50,
          marginBottom: 30,
          // transform: "translateX(-50)",
        }}
        width="100"
      />
      <Box width={"100%"}>
        <Typography
          component="h2"
          variant="h2"
          style={{
            fontSize: "30px",
            fontWeight: 500,
            color: "#B9C0FE",
            textAlign: "center",
            paddingBottom: 30,
          }}
        >
          Dashboard
        </Typography>
        <Stack spacing={2}>
          <NavItem navlink="Login" icon=<Login sx={{ color: "#B9C0FE" }} /> />
          <NavItem
            navlink="Registration"
            icon=<AppRegistration sx={{ color: "#B9C0FE" }} />
          />
          <NavItem
            navlink="Email"
            icon=<EmailOutlined sx={{ color: "#B9C0FE" }} />
          />
          <NavItem navlink="Forms" icon=<Person sx={{ color: "#B9C0FE" }} /> />
          <NavItem
            navlink="Notifications"
            icon=<WarningAmber sx={{ color: "#B9C0FE" }} />
          />
          <NavItem
            navlink="Alerts"
            icon=<NotificationAdd sx={{ color: "#B9C0FE" }} />
          />
          <NavItem
            navlink="Calendar"
            icon=<CalendarViewDay sx={{ color: "#B9C0FE" }} />
          />
        </Stack>
      </Box>
      <img alt="" src={logoDown} />
    </Box>
  );
};

export default Sidebar;
