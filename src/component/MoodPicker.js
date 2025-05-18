// src/components/MoodPicker.js
import { MOODS } from "../data";

export default function MoodPicker({ onSelect }) {
  return (
    <div className="flex justify-center gap-4 my-6">
      {MOODS.map((mood) => (
        <button
          key={mood.label}
          className={`text-4xl p-3 rounded-full shadow-md hover:scale-110 transition transform ${mood.color}`}
          onClick={() => onSelect(mood)}
          aria-label={mood.label}
        >
          {mood.emoji}
        </button>
      ))}
    </div>
  );
}
