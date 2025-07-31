import React from 'react';
import { Title, Text } from '@tremor/react';

interface HeroProps {
  name: string;
  title: string;
  location: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ name, title, location, description }) => {
  return (
    <div className="text-center p-12">
      <Title>{name}</Title>
      <Text>{title} in {location}</Text>
      <Text>{description}</Text>
    </div>
  );
};

export default Hero;
