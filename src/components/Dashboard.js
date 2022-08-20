// import "./Dashboard.css";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import { Box, Grid } from "@mui/material";
const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid minHeight={"100vh"} backgroundColor="#0A0D51" item xs={1} md={3}>
        <Sidebar />
      </Grid>
      <Grid alignSelf={"center"} textAlign="center" item xs={11} md={9}>
        <h1 sty>Dashboard</h1>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
