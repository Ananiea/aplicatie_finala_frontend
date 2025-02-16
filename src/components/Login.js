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
      setUserId(id);
      navigate("/dashboard");
    } catch (error) {
      alert("Ungültige ID!"); // "ID invalid!"
    }
  };

  return (
    <div>
      <h2>Anmeldung</h2>
      <input type="text" placeholder="ID eingeben" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleLogin}>Anmelden</button>
    </div>
  );
}

export default Login;
