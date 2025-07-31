import React from 'react';
import { Card, Title, Text, Flex, Badge } from '@tremor/react';

interface SkillsProps {
  skills: {
    technical: string[];
    soft: string[];
  };
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="py-20">
      <Title className="text-center mb-10">Skills</Title>
      <Flex className="justify-center">
        <Card className="max-w-2xl mr-6">
          <Title>Technical Skills</Title>
          <Flex className="flex-wrap">
            {skills.technical.map((skill, index) => (
              <Badge key={index} color="blue" className="m-1">
                {skill}
              </Badge>
            ))}
          </Flex>
        </Card>
        <Card className="max-w-2xl">
          <Title>Soft Skills</Title>
          <Flex className="flex-wrap">
            {skills.soft.map((skill, index) => (
              <Badge key={index} color="pink" className="m-1">
                {skill}
              </Badge>
            ))}
          </Flex>
        </Card>
      </Flex>
    </section>
  );
};

export default Skills;
