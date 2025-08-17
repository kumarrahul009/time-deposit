// src/components/Wizard/Step4.jsx
import React from "react";

const Step4 = ({ formData, restart }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg text-center">
      {/* Success Message */}
      <div className="flex items-center justify-center mb-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100">
          <span className="text-green-600 text-2xl">✔</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-green-600 mb-2">
        Deposit created!
      </h2>
      <p className="text-gray-600 mb-6">
        We’ve added it to your dashboard. You can monitor progress and see the
        projected payout.
      </p>

      {/* Deposit Info */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500">Deposit ID</p>
          <p className="font-semibold text-blue-600">TD-PFMBC</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500">Maturity</p>
          <p className="font-semibold text-gray-800">Nov 17, 2025</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500">Projected Payout</p>
          <p className="font-semibold text-blue-600">$5,037.50</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={restart}
          className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100"
        >
          Create another
        </button>
        <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
          Go to My Deposits
        </button>
      </div>

      {/* Live Summary */}
      <div className="text-left border-t pt-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Live Summary
        </h3>
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Amount</span>
          <span className="font-semibold">${formData.amount}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Term</span>
          <span className="font-semibold">{formData.term} months</span>
        </div>
      </div>
    </div>
  );
};

export default Step4;
