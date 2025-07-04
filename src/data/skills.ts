interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'JavaScript', level: 92 },
       { name:'TypeScript', level: 85 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'React', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'NextJs', level: 88 },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'Typescript', level: 80 },
      { name: 'Postgres', level: 90 },
    ],
  },

];

export default skillsData;