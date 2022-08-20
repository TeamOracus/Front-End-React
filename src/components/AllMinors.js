import { Login } from "@mui/icons-material";

function NavItem(props) {
  return (
    <div
      className="navlink"
      style={{
        background: "#FFFFFF",
        width: "80%",
        margin: "auto",
        display: "flex",
        padding: 15,
        alignItems: "center",
        borderRadius: 5,
        marginBottom: 5,
      }}
    >
      <span style={{ flex: 1 }}>{props.icon}</span>
      <p style={{ flex: 2, color: "#A4A6B3" }}>{props.navlink}</p>
    </div>
  );
}

export { NavItem };
