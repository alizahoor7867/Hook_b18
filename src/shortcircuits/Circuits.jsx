import { useState } from "react";

export default function App() {
  const [yourName, setYourName] = useState("");
  const [herName, setHerName] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [lovePercent, setLovePercent] = useState(null);

  const calculateLove = (name1, name2) => {
    const combined = (name1 + name2).toLowerCase();
    let score = 0;
    for (let char of combined) {
      score += char.charCodeAt(0);
    }
    return 100;
  };

  const handleShowLove = () => {
    if (yourName && herName) {
      setLovePercent(calculateLove(yourName, herName));
      setShowMessage(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-200 to-pink-300 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Floating Hearts */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute text-pink-300 animate-float opacity-50 pointer-events-none select-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 1.5 + 1.2}rem`,
            animationDuration: `${Math.random() * 4 + 6}s`,
          }}
        >
          💖
        </div>
      ))}

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-rose-700 mb-8 font-[Dancing Script,cursive] text-center drop-shadow-lg tracking-wide animate-fade-in">
        💌 A Magical Love Message 💌
      </h1>

      {/* Inputs */}
      <div className="flex flex-col gap-4 w-full max-w-md animate-fade-in-up">
        <input
          type="text"
          placeholder="Your Name"
          className="px-6 py-3 rounded-full shadow-md border-2 border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white/90 text-center text-lg backdrop-blur"
          value={yourName}
          onChange={(e) => setYourName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Her Beautiful Name"
          className="px-6 py-3 rounded-full shadow-md border-2 border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white/90 text-center text-lg backdrop-blur"
          value={herName}
          onChange={(e) => setHerName(e.target.value)}
        />
      </div>

      {/* Button */}
      <button
        className="mt-6 px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white text-lg font-semibold rounded-full shadow-xl transition-transform duration-300 hover:scale-105 animate-bounce"
        onClick={handleShowLove}
      >
        ❤️ Show My Love ❤️
      </button>

      {/* Message & Love Score */}
      {showMessage && (
        <div className="mt-12 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-800 drop-shadow-lg">
            I love you,
            <br />
            <span className="text-rose-600 font-[Dancing Script,cursive] italic text-5xl">
              {herName || "my love"} 💘
            </span>
          </h2>
          <p className="mt-4 text-rose-700 text-lg italic font-medium">
            Forever & Always 🌹
          </p>

          {/* Love Percent Circle */}
          <div className="mt-10 flex items-center justify-center">
            <div className="relative w-40 h-40 rounded-full bg-white shadow-inner flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[10px] border-rose-300 border-t-rose-600 animate-spin-slow"></div>
              <div className="text-3xl font-bold text-rose-600">
                {lovePercent}%
              </div>
            </div>
          </div>

          <p className="mt-6 text-rose-700 text-md italic">
            {yourName} ❤️ {herName} — made for each other!
          </p>
        </div>
      )}
    </div>
  );
}
