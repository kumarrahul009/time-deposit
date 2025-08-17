export default function LiveSummary({
  amount,
  term,
  apy,
  startDate,
  maturity,
  interest,
}) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-80">
      <h2 className="font-semibold text-lg mb-4">Live Summary</h2>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Amount</span>
          <span>${amount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Term</span>
          <span>{term} months</span>
        </div>
        <div className="flex justify-between">
          <span>APY</span>
          <span>{apy}%</span>
        </div>
        <div className="flex justify-between">
          <span>Start</span>
          <span>{startDate}</span>
        </div>
        <div className="flex justify-between">
          <span>Maturity</span>
          <span>{maturity}</span>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-xs text-gray-500">Estimated interest</p>
        <p className="text-xl font-semibold text-blue-700">${interest}</p>
        <p className="text-xs text-gray-400">
          For demo only. Actual rates may differ.
        </p>
      </div>
      <div className="mt-4 p-3 rounded-md bg-gray-50 text-xs text-gray-600">
        Heads up: This is a demo. Don’t enter sensitive info.
      </div>
    </div>
  );
}
