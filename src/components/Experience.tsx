import React from 'react';

interface Experience {
  title: string;
  company: string;
  location: string;
  dates: string;
  description: string[];
}

interface ExperienceProps {
  experience: Experience[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
      <div className="flex flex-col items-center">
        {experience.map((job, index) => (
          <div key={index} className="card w-full max-w-2xl bg-base-100 shadow-xl mb-6">
            <div className="card-body">
              <h3 className="card-title">{job.title}</h3>
              <p className="text-lg">{job.company} - {job.location}</p>
              <p className="text-sm text-gray-500">{job.dates}</p>
              <ul className="list-disc list-inside mt-4">
                {job.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
