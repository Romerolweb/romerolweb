import React from 'react';

interface HeroProps {
  name: string;
  title: string;
  location: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ name, title, location, description }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">{title} in {location}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
