// src/App.js
import React, { useState } from "react";
import MoodPicker from "./components/MoodPicker";
import MoodCalendar from "./components/MoodCalendar";
import MoodTrends from "./components/MoodTrends";

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

function App() {
  const [moods, setMoods] = useState([]);
  const [note, setNote] = useState("");

  const handleMoodSelect = (mood) => {
    const today = getToday();
    setMoods((prev) => [
      ...prev.filter((m) => m.date !== today),
      { date: today, mood, note },
    ]);
    setNote("");
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-2">Mood Tracker 😊</h1>
      <MoodPicker onSelect={handleMoodSelect} />
      <input
        className="w-full p-2 border rounded mb-4"
        placeholder="Add a note (optional)..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <h2 className="text-xl font-semibold my-2">Your Mood Calendar</h2>
      <MoodCalendar moods={moods} />
      <h2 className="text-xl font-semibold my-2">Mood Trends</h2>
      <MoodTrends moods={moods} />
    </div>
  );
}

export default App;
