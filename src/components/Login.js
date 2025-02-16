import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setToken, setUser, setUserId }) {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://aplicatie-backend.onrender.com/login", { id });

      setToken(res.data.token);
      setUser(res.data.name);
      setUserId(id);  // Salvează ID-ul utilizatorului

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
