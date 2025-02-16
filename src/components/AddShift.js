import { useState } from "react";
import axios from "axios";

function AddShift({ token, user }) {
  const [hours, setHours] = useState("");

  const handleAddShift = async () => {
    try {
      await axios.post("http://localhost:3000/add-shift", {
        user_id: user,
        total_hours: hours,
      }, { headers: { Authorization: `Bearer ${token}` } });

      alert("Tură adăugată!");
      setHours("");
    } catch (error) {
      alert("Eroare la adăugare!");
    }
  };

  return (
    <div>
      <h3>Adaugă o tură</h3>
      <input type="number" placeholder="Ore" value={hours} onChange={(e) => setHours(e.target.value)} />
      <button onClick={handleAddShift}>Adaugă</button>
    </div>
  );
}

export default AddShift;
