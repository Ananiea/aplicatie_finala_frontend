import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setToken, setUser, setUserId, setRole }) {
  const handleLogin = async () => {
    try {
      const res = await axios.post("https://aplicatie-backend.onrender.com/login", { id });

      setToken(res.data.token);
      setUser(res.data.name);
      setUserId(id);
      setRole(res.data.role); // Salvăm rolul utilizatorului

      navigate("/dashboard");
    } catch (error) {
      alert("ID invalid!");
    }
  };

  return (
    <div>
      <h2>Autentificare</h2>
      <input type="text" placeholder="ID Curier" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
