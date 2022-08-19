import "./Dashboard.css";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <Sidebar />
      </div>
      <div className="main">
        <SearchBar />
      </div>
    </div>
  );
};

export default Dashboard;
