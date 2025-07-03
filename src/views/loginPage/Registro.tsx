import React, { useState } from "react";
import InputField from "../../components/inputs/InputField";
import { useAuth } from "../../context/AuthContext";  
import { useNavigate } from "react-router-dom";

const Registro: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { register, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await register(email, password, nombre);
      navigate("/homePanel");
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  // Handler para Google
  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate("/homePanel");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 350, margin: "auto", marginTop: 40, border: "1px solid #eee", borderRadius: 8, padding: 24 }}>
      <h2>Registro de usuario</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Nombre"
          type="text"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          name="nombre"
          required
        />
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          required
        />
        <InputField
          label="Contraseña"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          name="password"
          required
        />
        <button type="submit" disabled={loading} style={{ width: "100%", padding: 10, marginTop: 8 }}>
          {loading ? "Registrando..." : "Registrarme"}
        </button>
        {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
      </form>
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <span>o</span>
        <br />
        <button
          type="button"
          onClick={handleGoogle}
          style={{
            marginTop: 8,
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: 4,
            padding: "8px 16px",
            cursor: "pointer",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: 8
          }}
        >
          <img src="https://img.icons8.com/?size=512&id=17949&format=png" alt="Google" width={22} height={22} />
          Ingresar con Google
        </button>
        <div style={{ marginTop: 12 }}>
          <span>¿Ya tienes cuenta?</span>{" "}
          <button
            type="button"
            onClick={() => navigate("/")}
            style={{
              background: "none",
              border: "none",
              color: "#1976d2",
              textDecoration: "underline",
              cursor: "pointer",
              padding: 0,
              fontSize: "1em"
            }}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registro;
