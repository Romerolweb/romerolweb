import React from 'react';

interface SkillsProps {
  skills: {
    technical: string[];
    soft: string[];
  };
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="py-20 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="flex justify-center">
        <div className="card w-full max-w-2xl bg-base-100 shadow-xl mr-6">
          <div className="card-body">
            <h3 className="card-title">Technical Skills</h3>
            <div className="flex flex-wrap">
              {skills.technical.map((skill, index) => (
                <div key={index} className="badge badge-primary badge-outline m-1">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title">Soft Skills</h3>
            <div className="flex flex-wrap">
              {skills.soft.map((skill, index) => (
                <div key={index} className="badge badge-secondary badge-outline m-1">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
