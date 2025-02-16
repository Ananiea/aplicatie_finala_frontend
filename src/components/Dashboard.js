import ShiftList from "./ShiftList";
import { Link } from "react-router-dom";

function Dashboard({ token, user, userId, role }) {
  return (
    <div>
      <h2>Bine ai venit, {user}!</h2>
      
      {role === "admin" ? (
        <button onClick={() => window.open("https://aplicatie-backend.onrender.com/export", "_blank")}>
        Export Excel
      </button>      
      ) : (
        <ShiftList token={token} user={user} />
      )}
      
      <br />
      <Link to="/add-shift">
        <button>Adaugă o tură</button>
      </Link>
    </div>
  );
}


export default Dashboard;
