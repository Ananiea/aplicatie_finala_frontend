import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddShift from "./components/AddShift";

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        {!token ? (
          <Route path="/" element={<Login setToken={setToken} setUser={setUser} />} />
        ) : (
          <>
            <Route path="/dashboard" element={<Dashboard token={token} user={user} />} />
            <Route path="/add-shift" element={<AddShift token={token} user={user} />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
