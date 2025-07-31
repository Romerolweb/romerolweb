import React from 'react';
import { Card, Title, Text } from '@tremor/react';

interface Education {
  degree: string;
  institution: string;
  location: string;
  dates: string;
}

interface EducationProps {
  education: Education[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="py-20">
      <Title className="text-center mb-10">Education</Title>
      <div className="flex flex-col items-center">
        {education.map((edu, index) => (
          <Card key={index} className="max-w-2xl mb-6">
            <Title>{edu.degree}</Title>
            <Text>{edu.institution} - {edu.location}</Text>
            <Text>{edu.dates}</Text>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;
