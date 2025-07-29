import { promises as fs } from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'src', 'data');

export async function getProfile() {
  const file = await fs.readFile(path.join(dataDir, 'profile.json'), 'utf8');
  return JSON.parse(file);
}

export async function getExperience() {
  const file = await fs.readFile(path.join(dataDir, 'experience.json'), 'utf8');
  return JSON.parse(file);
}

export async function getSkills() {
  const file = await fs.readFile(path.join(dataDir, 'skills.json'), 'utf8');
  return JSON.parse(file);
}

export async function getEducation() {
  const file = await fs.readFile(path.join(dataDir, 'education.json'), 'utf8');
  return JSON.parse(file);
}
