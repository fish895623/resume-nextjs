import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    { title: 'Java', level: 3 },
    { title: 'javascript', level: 2 },
    { title: 'typescript', level: 2 },
    { title: 'Python', level: 1 },
    { title: 'C/C++', level: 1 },
    { title: 'Rust', level: 1 },
    { title: 'Go', level: 1 },
    { title: 'PHP', level: 1 },
  ],
};

const database: ISkill.Skill = {
  category: 'DATABASE',
  items: [
    { title: 'MySQL', level: 2 },
    { title: 'Postgresql', level: 2 },
    { title: 'Redis', level: 2 },
    { title: 'MongoDB', level: 2 },
  ],
};

const frontend: ISkill.Skill = {
  category: 'FRONT-END',
  items: [
    { title: 'javascript', level: 2 },
    { title: 'HTML/CSS', level: 2 },
  ],
};

const etc: ISkill.Skill = {
  category: 'ETC',
  items: [
    { title: 'Ubuntu' },
    { title: 'Arch Linux' },
    { title: 'Vim' },
    { title: 'VS Code' },
    { title: 'Docker' },
    { title: 'Kubernetes' },
    { title: 'Prometheus' },
    { title: 'Teamcity' },
    { title: 'Jenkins' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
