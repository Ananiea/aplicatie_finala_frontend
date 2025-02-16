import { useEffect, useState } from "react";
import axios from "axios";

function ShiftList({ token, user }) {
  const [shifts, setShifts] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7)); // Luna curentă
  const [totalShifts, setTotalShifts] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/shifts/${user}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // Filtrăm turele după luna selectată
        const filteredShifts = res.data.filter((shift) =>
          shift.shift_date.startsWith(selectedMonth)
        );
        setShifts(filteredShifts);
        setTotalShifts(filteredShifts.reduce((acc, shift) => acc + shift.total_hours, 0));
      });
  }, [user, token, selectedMonth]);

  return (
    <div>
      <h2>Turele tale</h2>

      <label>Selectează luna:</label>
      <input
        type="month"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      />

      <h3>Total ore luna {selectedMonth}: {totalShifts} ore</h3>

      <ul>
        {shifts.length > 0 ? (
          shifts.map((shift) => (
            <li key={shift.id}>
              {shift.shift_date} - {shift.total_hours} ore
            </li>
          ))
        ) : (
          <p>Nicio tură înregistrată pentru această lună.</p>
        )}
      </ul>
    </div>
  );
}

export default ShiftList;
