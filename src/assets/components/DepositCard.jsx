import { Button } from "./UI/Button";
export default function DepositCard({
  id,
  amount,
  term,
  apy,
  payoutType,
  startDate,
  maturityDate,
  projectedInterest,
  projectedPayout,
}) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 mb-6 border border-gray-100">
      {/* Top Section */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 font-semibold">ID: {id}</p>
          <h2 className="text-xl font-bold text-gray-800">
            {amount} for {term}
          </h2>
          <p className="text-gray-500 text-sm">
            APY {apy} • {payoutType}
          </p>
        </div>
        <Button className="bg-green-500 hover:bg-green-600 rounded-xl px-4">
          View
        </Button>
      </div>

      {/* Progress bar */}
      <div className="mt-3">
        <div className="flex justify-between text-xs text-gray-500">
          <span>Start: {startDate}</span>
          <span>0%</span>
          <span>Maturity: {maturityDate}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-blue-50 rounded-xl p-3 text-center">
          <p className="text-sm text-gray-500">Projected Interest</p>
          <p className="text-lg font-bold text-blue-700">{projectedInterest}</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-3 text-center">
          <p className="text-sm text-gray-500">Projected Payout</p>
          <p className="text-lg font-bold text-blue-700">{projectedPayout}</p>
        </div>
      </div>

      {/* Close button */}
      <div className="mt-4 flex justify-end">
        <button className="text-blue-600 text-sm font-medium hover:underline">
          Close Early (Demo)
        </button>
      </div>
    </div>
  );
}
