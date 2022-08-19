import {
  Logout,
  AppRegistrationOutlined,
  People,
  Warning,
  NotificationAdd,
  CalendarMonth,
  VerifiedUser,
} from "@mui/icons-material";
import logo from "../assets/imgs/logo.png";
import logoDown from "../assets/imgs/logoDown.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <img className="logo" src={logo} alt="" />

        <h1>Dashboard</h1>

        <div className="navCards">
          <button className="navCard">
            <Logout
              className="icon"
              style={{
                color: "#bbbbbb",
              }}
            />
            <span>Login</span>
          </button>
          <button className="navCard">
            <AppRegistrationOutlined
              className="icon"
              style={{
                color: "#bbbbbb",
              }}
            />
            <span>Registration</span>
          </button>
          <button className="navCard">
            <People
              className="icon"
              style={{
                color: "#bbbbbb",
              }}
            />
            <span>Email</span>
          </button>
          <button className="navCard">
            <VerifiedUser
              className="icon"
              style={{
                color: "#bbbbbb",
              }}
            />
            <span>Forms</span>
          </button>
          <button className="navCard">
            <Warning
              className="icon"
              style={{
                color: "#bbbbbb",
              }}
            />
            <span>Notifications</span>
          </button>
          <button className="navCard">
            <NotificationAdd
              className="icon"
              style={{
                color: "#bbbbbb",
              }}
            />
            <span>Alerts</span>
          </button>
          <button className="navCard">
            <CalendarMonth
              className="icon"
              style={{
                color: "#bbbbbb",
              }}
            />
            <span>Calendar</span>
          </button>
        </div>
        <img src={logoDown} style={{ marginTop: 30 }} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
