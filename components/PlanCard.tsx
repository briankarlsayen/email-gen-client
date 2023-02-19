import React from "react";

interface PlanCardProps {
  title: string;
  description: string;
  amount: number;
  features: string[];
}

const PlanCard = ({ title, description, amount, features }: PlanCardProps) => {
  return (
    <div className="bg-slate-100 p-4 rounded-md">
      <h4>{title}</h4>
      <h2>
        ${amount}
        <span className="text-sm font-thin">/year</span>
      </h2>
      <p className="pt-4 pb-8">{description}</p>
      <hr />
      <ul className="py-8">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <button className="btn btn-info w-full">Choose</button>
    </div>
  );
};

export default PlanCard;
