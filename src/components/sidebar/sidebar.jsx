import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="logo">SmartSeason</h1>

      <nav>
        <Link to="/admin">Dashboard</Link>
        <Link to="/fields">Fields</Link>
        <Link to="/updates">Updates</Link>
      </nav>
    </div>
  );
}

export default Sidebar;