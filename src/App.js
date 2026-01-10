import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Register from "./pages/Register";
import VerifyOtp from "./pages/VerifyOtp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Activity from "./pages/Activity";
import ProtectedRoute from "./components/ProtectedRoute";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";

import { connectSocket } from "./services/sessionSocket";


import "./utils/globalTracker";
import RouteTracker from "./components/RouteTracker";


function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("access");

    if (token) {
      connectSocket(); // ✅ connects after login
    }
  }, [location.pathname]); // 🔥 THIS is the key fix

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/activity"
        element={
          <ProtectedRoute>
            <Activity />
          </ProtectedRoute>
        }
      />

    </Routes>

  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteTracker />
      <AppRoutes />
    </BrowserRouter>
  );
}
