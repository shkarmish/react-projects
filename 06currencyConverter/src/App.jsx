import { useState, useEffect } from "react";

const NAMES = {
  USD:"US Dollar", EUR:"Euro", GBP:"British Pound", PKR:"Pakistani Rupee",
  AED:"UAE Dirham", SAR:"Saudi Riyal", INR:"Indian Rupee", JPY:"Japanese Yen",
  CNY:"Chinese Yuan", CAD:"Canadian Dollar", AUD:"Australian Dollar",
  CHF:"Swiss Franc", KWD:"Kuwaiti Dinar", SGD:"Singapore Dollar",
  TRY:"Turkish Lira", ZAR:"South African Rand", MXN:"Mexican Peso",
  BRL:"Brazilian Real", NZD:"New Zealand Dollar", HKD:"Hong Kong Dollar",
  THB:"Thai Baht", IDR:"Indonesian Rupiah", PHP:"Philippine Peso",
  EGP:"Egyptian Pound", QAR:"Qatari Riyal", OMR:"Omani Rial",
  BHD:"Bahraini Dinar", LKR:"Sri Lankan Rupee", TWD:"Taiwan Dollar",
  ILS:"Israeli Shekel", CZK:"Czech Koruna", PLN:"Polish Zloty",
};

export default function CurrencyConverter() {
  const [rates, setRates] = useState({});
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PKR");
  const [amount, setAmount] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/8b943b0eb93f27a5e276e8e6/latest/USD")
      .then((r) => r.json())
      .then((data) => {
        setRates({ USD: 1, ...data.conversion_rates });
        setUpdatedAt(new Date().toLocaleTimeString());
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load rates. Check internet connection.");
        setLoading(false);
      });
  }, []);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const getRate = (target) => {
    if (!rates[from] || !rates[target]) return 0;
    return (rates[target] / rates[from]);
  };

  const converted = (amount / (rates[from] || 1)) * (rates[to] || 0);
  const rate = getRate(to);

  const currencies = Object.keys(rates).sort();

  const filteredRows = currencies.filter((c) => {
    const q = search.toLowerCase();
    return c.toLowerCase().includes(q) || (NAMES[c] || "").toLowerCase().includes(q);
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">💱 Currency Converter</h1>
          {updatedAt && <p className="text-slate-500 text-xs mt-1">Live rates · Updated at {updatedAt}</p>}
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </div>

        {/* Converter Box */}
        <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 mb-4">

          {/* Amount */}
          <div className="mb-4">
            <label className="text-slate-400 text-xs uppercase tracking-wider mb-1 block">Amount</label>
            <input
              type="number"
              value={amount}
              min={0}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-slate-800 text-white text-xl font-bold rounded-xl px-4 py-3 border border-slate-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* From / Swap / To */}
          <div className="flex items-end gap-3 mb-4">
            <div className="flex-1">
              <label className="text-slate-400 text-xs uppercase tracking-wider mb-1 block">From</label>
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full bg-slate-800 text-white rounded-xl px-4 py-3 border border-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                {currencies.map((c) => (
                  <option key={c} value={c}>{c} — {NAMES[c] || c}</option>
                ))}
              </select>
            </div>

            <button
              onClick={swap}
              className="mb-0.5 p-3 bg-slate-800 hover:bg-blue-600 rounded-xl border border-slate-700 transition-all text-lg"
            >
              ⇄
            </button>

            <div className="flex-1">
              <label className="text-slate-400 text-xs uppercase tracking-wider mb-1 block">To</label>
              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full bg-slate-800 text-white rounded-xl px-4 py-3 border border-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                {currencies.map((c) => (
                  <option key={c} value={c}>{c} — {NAMES[c] || c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Result */}
          {!loading && rates[to] && (
            <div className="bg-slate-800 rounded-xl px-5 py-4 border border-slate-700 text-center">
              <p className="text-slate-400 text-sm">{amount} {from} =</p>
              <p className="text-blue-400 text-3xl font-bold mt-1">
                {converted.toLocaleString(undefined, { maximumFractionDigits: 4 })} {to}
              </p>
              <p className="text-slate-500 text-xs mt-2">
                1 {from} = {rate.toFixed(4)} {to} · 1 {to} = {(1 / rate).toFixed(4)} {from}
              </p>
            </div>
          )}

          {loading && <p className="text-center text-slate-500 py-4">Loading rates...</p>}
        </div>

        {/* All Currencies Table */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
          <div className="p-4 border-b border-slate-800">
            <input
              type="text"
              placeholder="Search currency..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-800 text-white rounded-xl px-4 py-2.5 border border-slate-700 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-slate-500 text-xs uppercase tracking-wider">
                <th className="text-left px-4 py-3">Currency</th>
                <th className="text-right px-4 py-3">Rate</th>
                <th className="text-right px-4 py-3">Converted</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((c) => {
                const r = getRate(c);
                const conv = (amount / (rates[from] || 1)) * (rates[c] || 0);
                return (
                  <tr
                    key={c}
                    onClick={() => setTo(c)}
                    className={`border-t border-slate-800 cursor-pointer transition-colors ${
                      to === c ? "bg-blue-900/30" : "hover:bg-slate-800"
                    }`}
                  >
                    <td className="px-4 py-3">
                      <span className="font-bold">{c}</span>
                      <span className="text-slate-500 ml-2">{NAMES[c] || ""}</span>
                    </td>
                    <td className="px-4 py-3 text-right text-slate-300">{r.toFixed(4)}</td>
                    <td className="px-4 py-3 text-right font-bold text-blue-400">
                      {conv.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}