import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Cart from "../Features/Cart";
import Logout from "../Components/Logout";

// Lazy load the components
const LoginPage = React.lazy(() => import("../Features/Auth/LogIn"));
const Dashboard = React.lazy(() => import("../Features/Dashboard"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
