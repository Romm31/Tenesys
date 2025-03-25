import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const checkFlag = () => {
    if (input === "tenesys{M4s1h_3a5Y_K4nn_Y4kkk??????}") {
      setMessage("🎉 Correct! Here is your flag: " + input);
    } else {
      setMessage("❌ Wrong flag, try again!");
    }
  };

  return (
    <div className="text-center p-10 bg-gray-800 rounded-xl shadow-xl">
      <h1 className="text-3xl font-bold">CTF Challenge: True or False</h1>
      <p className="mt-2 text-gray-400">Can you find the correct flag?</p>
      <input
        type="text"
        className="mt-4 p-2 text-black rounded-lg"
        placeholder="Enter flag..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={checkFlag}
        className="ml-2 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Submit
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
