import Sidebar from "../sidebar/sidebar";
import "./admindashboard.css"


function Card({ title, value }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />


      <div className="dashboard-content">
        <h1>Admin Dashboard</h1>

        <div className="cards-grid">
          <Card title="Total Fields" value="20" />
          <Card title="Active Fields" value="12" />
          <Card title="Completed Fields" value="5" />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;