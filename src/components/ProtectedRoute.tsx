import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, redirectTo = "/login" }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;

  if (!user) {
    return <Navigate to={"/"}/>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
