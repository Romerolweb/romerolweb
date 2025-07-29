import React from 'react';

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
      <h2 className="text-3xl font-bold text-center mb-10">Education</h2>
      <div className="flex flex-col items-center">
        {education.map((edu, index) => (
          <div key={index} className="card w-full max-w-2xl bg-base-100 shadow-xl mb-6">
            <div className="card-body">
              <h3 className="card-title">{edu.degree}</h3>
              <p className="text-lg">{edu.institution} - {edu.location}</p>
              <p className="text-sm text-gray-500">{edu.dates}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
