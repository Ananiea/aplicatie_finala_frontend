import ShiftList from "./ShiftList";
import { Link } from "react-router-dom";

function Dashboard({ token, user }) {
  return (
    <div>
      <h2>Willkommen, {user}!</h2>
      <ShiftList token={token} user={user} />
      <br />
      <Link to="/add-shift">
        <button>Schicht hinzufügen</button>
      </Link>
    </div>
  );
}

export default Dashboard;
