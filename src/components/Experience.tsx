import React from 'react';
import { Card, Title, Text, List, ListItem } from '@tremor/react';

interface Experience {
  title: string;
  company: string;
  location:string;
  dates: string;
  description: string[];
}

interface ExperienceProps {
  experience: Experience[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section className="py-20">
      <Title className="text-center mb-10">Experience</Title>
      <div className="flex flex-col items-center">
        {experience.map((job, index) => (
          <Card key={index} className="max-w-2xl mb-6">
            <Title>{job.title}</Title>
            <Text>{job.company} - {job.location}</Text>
            <Text>{job.dates}</Text>
            <List className="mt-4">
              {job.description.map((item, i) => (
                <ListItem key={i}>
                  <Text>{item}</Text>
                </ListItem>
              ))}
            </List>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
