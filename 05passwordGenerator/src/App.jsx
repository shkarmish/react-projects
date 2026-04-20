import { useState, useCallback } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordGenerator = useCallback(() => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) chars += "0123456789";
    if (charAllowed) chars += "!@#$%^&*";

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-md shadow-2xl border border-gray-800">

        {/* Header */}
        <h1 className="text-white text-2xl font-bold text-center mb-1">🔐 Password Generator</h1>
        <p className="text-gray-500 text-sm text-center mb-6">Generate a strong random password</p>

        {/* Password Display */}
        <div className="flex items-center bg-gray-800 rounded-xl px-4 py-3 mb-6 gap-3">
          <span className="text-green-400 font-mono text-lg flex-1 tracking-widest break-all">
            {password || "Click Generate..."}
          </span>
          <button
            onClick={copyPassword}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-700 text-gray-300 hover:bg-green-500 hover:text-white transition-all"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-5">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Length</span>
            <span className="text-white font-bold">{length}</span>
          </div>
          <input
            type="range" min={6} max={32} value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-green-400"
          />
        </div>

        {/* Checkboxes */}
        <div className="space-y-3 mb-6">
          <label className="flex items-center justify-between bg-gray-800 rounded-xl px-4 py-3 cursor-pointer hover:bg-gray-750">
            <span className="text-gray-300 text-sm">Include Numbers</span>
            <input
              type="checkbox" checked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
              className="w-4 h-4 accent-green-400"
            />
          </label>

          <label className="flex items-center justify-between bg-gray-800 rounded-xl px-4 py-3 cursor-pointer hover:bg-gray-750">
            <span className="text-gray-300 text-sm">Special Characters (!@#$)</span>
            <input
              type="checkbox" checked={charAllowed}
              onChange={(e) => setCharAllowed(e.target.checked)}
              className="w-4 h-4 accent-green-400"
            />
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-3 rounded-xl transition-all active:scale-95"
        >
          Generate Password
        </button>

      </div>
    </div>
  );
}