import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddShift from "./components/AddShift";

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);

  return (
    <Router>
      <Routes>
        {!token ? (
          <Route path="/" element={<Login setToken={setToken} setUser={setUser} setUserId={setUserId} />} />
        ) : (
          <>
            <Route path="/dashboard" element={<Dashboard token={token} user={user} />} />
            <Route path="/add-shift" element={<AddShift token={token} user={user} userId={userId} />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
