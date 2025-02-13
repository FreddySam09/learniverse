import React from 'react';

const scholarships = [
  {
    title: "National Means-cum-Merit Scholarship",
    amount: "INR 12,000 per year",
    eligibility: "Class 9 to 12",
  },
  {
    title: "Post Matric Scholarship for SC Students",
    amount: "Variable amount",
    eligibility: "Class 11 to PhD",
  },
  {
    title: "Merit-cum-Means Scholarship",
    amount: "INR 50,000 per year",
    eligibility: "Undergraduate & Postgraduate",
  },
  {
    title: "Indira Gandhi Scholarship for Single Girl Child",
    amount: "INR 36,200 per year",
    eligibility: "Postgraduate",
  },
];

const FinancePage = () => {
  return (
    <div className="p-6">
      <h1 className="mt-12 ml-32 text-2xl font-bold mb-4">Scholarships you can apply</h1>
      <div className="mt-20 ml-44 grid grid-cols-1 gap-4">
        {scholarships.map((scholarship, index) => (
          <div
            key={index}
            className="bg-white w-96 p-4 shadow-lg rounded-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold">{scholarship.title}</h2>
            <p className="text-gray-600">Amount: {scholarship.amount}</p>
            <p className="text-gray-600">Eligibility: {scholarship.eligibility}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancePage;
