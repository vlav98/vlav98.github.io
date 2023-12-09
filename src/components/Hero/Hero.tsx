import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <div className="hero bg-gray-800 text-white  h-full flex flex-col justify-center items-center">
      <h1 className="hero-title text-4xl font-bold mb-4">{title}</h1>
      <p className="hero-subtitle text-lg">{subtitle}</p>
    </div>
  );
};

export default Hero;
