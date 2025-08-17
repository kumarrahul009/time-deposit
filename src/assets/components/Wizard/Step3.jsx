// src/components/Wizard/Step3.jsx
import React from "react";

const Step3 = ({ formData, prev, next }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Review & Confirm</h2>

      <div className="space-y-4">
        <div>
          <p className="font-medium">Amount:</p>
          <p className="text-gray-700">${formData.amount}</p>
        </div>

        <div>
          <p className="font-medium">Term:</p>
          <p className="text-gray-700">{formData.term} months</p>
        </div>

        <div>
          <p className="font-medium">Start Date:</p>
          <p className="text-gray-700">{formData.startDate}</p>
        </div>

        <div>
          <p className="font-medium">Interest Rate:</p>
          <p className="text-gray-700">{formData.interestRate}%</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prev}
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          Back
        </button>

        <button
          onClick={next}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Confirm & Continue
        </button>
      </div>
    </div>
  );
};

export default Step3;
