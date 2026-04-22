import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/AdminDashbord/admindasboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;