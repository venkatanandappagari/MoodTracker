// src/components/MoodCalendar.js
export default function MoodCalendar({ moods }) {
  // Group moods by date
  const days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    const dateStr = date.toISOString().slice(0, 10);
    const mood = moods.find((m) => m.date === dateStr);
    return { date: dateStr, mood };
  });

  return (
    <div className="grid grid-cols-7 gap-2 my-4">
      {days.map(({ date, mood }) => (
        <div
          key={date}
          className={`w-10 h-10 flex items-center justify-center rounded ${mood ? mood.mood.color : "bg-gray-100"}`}
          title={mood ? mood.mood.label : "No entry"}
        >
          {mood ? mood.mood.emoji : ""}
        </div>
      ))}
    </div>
  );
}
