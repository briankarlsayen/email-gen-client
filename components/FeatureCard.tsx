import React from "react";

interface FeatureCardProps {
  title: string;
  body: string;
  icon: any;
}

const FeatureCard = ({ title, body, icon }: FeatureCardProps) => {
  return (
    <div className="min-h-[20rem] bg-slate-100 max-w-lg p-4 rounded-md flex flex-col">
      <div className="flex justify-center flex-1 items-center">{icon}</div>
      <h2 className="py-4">{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default FeatureCard;
