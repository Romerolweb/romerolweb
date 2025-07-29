import Head from 'next/head';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import { getProfile, getExperience, getSkills, getEducation } from '@/lib/dao';

export default function Home({ profile, experience, skills, education }) {
  return (
    <div>
      <Head>
        <title>{profile.name} | {profile.title}</title>
        <meta name="description" content={`${profile.name}'s portfolio`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero {...profile} />
        <Experience experience={experience} />
        <Skills skills={skills} />
        <Education education={education} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const profile = await getProfile();
  const experience = await getExperience();
  const skills = await getSkills();
  const education = await getEducation();

  return {
    props: {
      profile,
      experience,
      skills,
      education,
    },
  };
}
