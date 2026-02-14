import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-blue-600 text-white py-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Welcome to Z-Test Premium
      </h1>
      <p className="text-lg md:text-xl text-center max-w-xl">
        This is a modular React app demonstrating the Z-Test structure.
      </p>
    </section>
  );
};

export default Hero;
