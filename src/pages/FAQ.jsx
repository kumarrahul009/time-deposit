import React, { useState } from "react";

const faqs = [
  {
    question: "What is a time deposit?",
    answer:
      "It’s a fixed-term savings product where your money earns a set rate until a set date.",
  },
  {
    question: "Can I withdraw early?",
    answer:
      "In this demo, you can simulate closing early with a simple penalty example.",
  },
  {
    question: "Is this real?",
    answer:
      "No. This is a demo experience only and does not connect to any bank.",
  },
  {
    question: "What data is stored?",
    answer:
      "Only demo deposit details stored locally in your browser. You can clear them anytime.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="cursor-pointer border rounded-xl p-4 shadow-sm bg-gray-50 hover:bg-gray-100 transition"
          >
            <h3 className="font-medium text-lg text-gray-800">
              {faq.question}
            </h3>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
