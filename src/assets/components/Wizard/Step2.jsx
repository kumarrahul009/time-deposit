import { useState } from "react";

const Step2 = ({ next, prev }) => {
  const [payout, setPayout] = useState("At Maturity");

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Pick payout preference</h2>

      {/* Payout frequency options */}
      <div className="flex gap-4 mb-6">
        <button
          className={`p-4 rounded-lg border ${
            payout === "At Maturity"
              ? "bg-blue-100 border-blue-500"
              : "border-gray-300"
          }`}
          onClick={() => setPayout("At Maturity")}
        >
          At Maturity
        </button>

        <button
          className={`p-4 rounded-lg border ${
            payout === "Monthly"
              ? "bg-blue-100 border-blue-500"
              : "border-gray-300"
          }`}
          onClick={() => setPayout("Monthly")}
        >
          Monthly
        </button>
      </div>

      {/* Estimated rate */}
      <div className="p-4 border rounded-lg mb-6">
        <h3 className="font-semibold">Estimated rate (APY)</h3>
        <p className="text-3xl font-bold text-blue-600">3.00%</p>
        <p className="text-gray-500 text-sm">varies by term</p>
        <p className="text-gray-400 text-xs">
          This is an estimate for demo purposes.
        </p>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button className="px-6 py-2 border rounded-full" onClick={prev}>
          Back
        </button>
        <button
          className="px-6 py-2 bg-green-600 text-white rounded-full"
          onClick={() => next({ payout })}
        >
          Review
        </button>
      </div>
    </div>
  );
};

export default Step2;
