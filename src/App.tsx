import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./views/loginPage/Login";
import Home from "./views/homePage/Home";
import Pedidos from "./views/pedidos/Pedidos";
import { NavBar } from "./views/navBar/NavBar";
import Producto from "./views/productos/Productos";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";
import Registro from "./views/loginPage/Registro";

const App: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;

  return (
    <>
      {user && <NavBar />}

      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/homePanel" /> : <Login />}
        />
        <Route path="/registro" element={<Registro />} />

        <Route
          path="/homePanel"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pedidos"
          element={
            <ProtectedRoute>
              <Pedidos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/productos"
          element={
            <ProtectedRoute>
              <Producto />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to={user ? "/homePanel" : "/"} />} />
      </Routes>
    </>
  );
};

export default App;
