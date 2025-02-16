import { useState } from "react";
import axios from "axios";

function AddShift({ token, user, userId }) {
  const [shiftNumber, setShiftNumber] = useState("");
  const [kunde, setKunde] = useState("");
  const [auto, setAuto] = useState("");
  const [datum, setDatum] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!shiftNumber || !kunde || !auto || !datum || !startTime || !endTime) {
      alert("Alle Felder sind erforderlich!");
      return;
    }

    if (/\s/.test(auto)) {
      alert("Das Feld 'Auto' darf keine Leerzeichen enthalten!");
      return;
    }

    try {
      await axios.post("https://aplicatie-backend.onrender.com/add-shift", {
        user_id: userId,
        shift_number: shiftNumber,
        kunde,
        auto,
        datum,
        start_time: startTime,
        end_time: endTime,
      }, { headers: { Authorization: `Bearer ${token}` } });

      alert("Schicht erfolgreich hinzugefügt!");
      setShiftNumber("");
      setKunde("");
      setAuto("");
      setDatum("");
      setStartTime("");
      setEndTime("");
    } catch (error) {
      alert("Fehler beim Hinzufügen der Schicht!");
    }
  };

  return (
    <div>
      <h2>Schicht hinzufügen</h2>
      <form onSubmit={handleSubmit}>
        <label>Ture:</label>
        <input type="number" value={shiftNumber} onChange={(e) => setShiftNumber(e.target.value)} required />

        <label>Name:</label>
        <input type="text" value={user} disabled />

        <label>ID:</label>
        <input type="text" value={userId} disabled />

        <label>Kunde:</label>
        <input type="number" value={kunde} onChange={(e) => setKunde(e.target.value)} required />

        <label>Auto:</label>
        <input type="text" value={auto} onChange={(e) => setAuto(e.target.value.replace(/\s/g, ''))} required />

        <label>Datum:</label>
        <input type="date" value={datum} onChange={(e) => setDatum(e.target.value)} required
          min={new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split("T")[0]}
          max={new Date().toISOString().split("T")[0]}
        />

        <label>Start (hh:mm):</label>
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />

        <label>Ende (hh:mm):</label>
        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />

        <button type="submit">Hinzufügen</button>
      </form>
    </div>
  );
}

export default AddShift;
