// src/components/MoodTrends.js
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function MoodTrends({ moods }) {
  // Assign a numeric value to each mood for graphing
  const moodValue = (label) =>
    ["Sad", "Neutral", "Happy", "Surprised", "Angry"].indexOf(label);

  const data = moods.map((m) => ({
    date: m.date.slice(5), // MM-DD
    mood: moodValue(m.mood.label),
  }));

  return (
    <div className="w-full h-48 my-6">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis domain={[0, 4]} hide />
          <Tooltip />
          <Line type="monotone" dataKey="mood" stroke="#8884d8" strokeWidth={2} dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
