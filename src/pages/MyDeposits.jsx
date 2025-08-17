import DepositCard from "../assets/components/DepositCard";
import React from "react";
import { Button } from "../assets/components/UI/Button";

export default function MyDeposits() {
  const deposits = [
    {
      id: "TD-DZFXD",
      amount: "$5,000.00",
      term: "3 mo",
      apy: "3.00%",
      payoutType: "At maturity",
      startDate: "Aug 17, 2025",
      maturityDate: "Nov 17, 2025",
      projectedInterest: "$37.09",
      projectedPayout: "$5,037.09",
    },
    {
      id: "TD-PFMBC",
      amount: "$5,000.00",
      term: "3 mo",
      apy: "3.00%",
      payoutType: "Monthly payout",
      startDate: "Aug 17, 2025",
      maturityDate: "Nov 17, 2025",
      projectedInterest: "$37.50",
      projectedPayout: "$5,037.50",
    },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Deposits</h1>
        <Button className="bg-green-500 hover:bg-green-600 rounded-xl px-5">
          Create New
        </Button>
      </div>

      {/* Deposit Cards */}
      {deposits.map((deposit, index) => (
        <DepositCard key={index} {...deposit} />
      ))}
    </div>
  );
}