import { apiRequest } from "../api/api";
import { useNavigate } from "react-router-dom";
// import { disconnectSocket } from "../api/socket";

function Dashboard() {
  const navigate = useNavigate();

  const logout = async () => {
    const refresh = localStorage.getItem("refresh");
    await apiRequest("/logout/", "POST", { refresh }, true);

    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <h2>Dashboard</h2>
      <button onClick={() => navigate("/activity")}>My Activity</button>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Dashboard;
