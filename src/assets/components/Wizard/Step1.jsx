import { useState } from "react";
import LiveSummary from "../LiveSummary";
import ProgressBar from "../ProgressBar";

export default function Step1() {
  const [amount, setAmount] = useState(5000);
  const [term, setTerm] = useState(3);
  const [startDate, setStartDate] = useState("2025-08-17");
  const [autoRenew, setAutoRenew] = useState(false);

  const apy = 3.0;
  const maturity = "2025-11-17";
  const interest = "37.09";

  return (
    <div className="flex justify-center mt-6 space-x-8">
      {/* Left Section */}
      <div className="bg-white shadow-md rounded-2xl p-6 w-[600px]">
        <ProgressBar step={1} />
        <h2 className="text-xl font-semibold mb-6">
          Choose your amount & term
        </h2>

        {/* Deposit Amount */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Deposit amount
          </label>
          <div className="flex items-center space-x-2">
            <span className="font-bold">$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="border rounded-md p-2 flex-1"
            />
          </div>
          <input
            type="range"
            min="500"
            max="20000"
            step="100"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full mt-2"
          />
          <p className="text-xs text-gray-500">Minimum $500</p>
        </div>

        {/* Term */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Term (months)
          </label>
          <div className="flex space-x-4">
            {[3, 6, 12, 24].map((t) => (
              <button
                key={t}
                onClick={() => setTerm(t)}
                className={`px-4 py-2 rounded-lg border 
                  ${
                    term === t
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700"
                  }`}
              >
                {t}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Longer terms generally offer higher rates.
          </p>
        </div>

        {/* Start Date */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Start date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded-md p-2"
          />
          <p className="text-xs text-gray-500">Interest begins on this date.</p>
        </div>

        {/* Auto renew */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Auto-renew</label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={autoRenew}
              onChange={() => setAutoRenew(!autoRenew)}
              className="mr-2"
            />
            When the term ends, automatically renew with the then-current rate.
          </label>
        </div>

        <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
          Continue
        </button>
      </div>

      {/* Right Section */}
      <LiveSummary
        amount={amount}
        term={term}
        apy={apy}
        startDate={startDate}
        maturity={maturity}
        interest={interest}
      />
    </div>
  );
}
