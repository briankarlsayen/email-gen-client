import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col flex-1 justify-center h-[calc(100vh-64px)]">
      <h1 className="text-6xl font-semibold">
        <span className="text-primary">Smart Emails for</span>
        <br />
        <span>Smart Marketers</span>
      </h1>
      <p className="max-w-2xl text-xl pt-4">
        Our AI algorithms analyze customer data to create personalized and
        engaging emails that are tailored to each individual. This means you can
        save time and increase customer satisfaction with just a few clicks.
      </p>
    </div>
  );
};

export default Hero;
