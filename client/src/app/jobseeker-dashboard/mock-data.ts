import { JOB } from '../job';

export const JOBS: JOB[] = [
  {
    _id: 1,
    category: {
      _id: 1,
      name: 'software'
    },
    title: 'Full Stack Engineering',
    company: 'Local company',
    industry: 'software',
    location: 'Chico, CA',
    type: 'Full-Time',
    skills: [
      {
        id: 1,
        skill: 'Java'
      },
      {
        id: 2,
        skill: 'javaScript'
      }
    ],
    description: 'we are a company that cares about clients'
  },
  {
    _id: 2,
    category: {
      _id: 2,
      name: 'software/engineering'
    },
    title: 'Front End Engineering',
    company: 'Web Design',
    industry: 'web/software',
    location: 'San Diego',
    type: 'Part-Time',
    skills: [
      {
        id: 1,
        skill: 'Bachelor\'s Degree'
      },
      {
        id: 2,
        skill: 'javaScript'
      },
      {
        id: 3,
        skill: 'React'
      },
      {
        id: 4,
        skill: 'nodejs'
      }
    ],
    description: 'we are a company that cares about clients'
  },
  {
    _id: 3,
    category: {
      _id: 3,
      name: 'business'
    },
    title: 'Business manager',
    company: 'Business Company',
    industry: 'business',
    location: 'San Diego',
    type: 'Full-Time',
    skills: [
      {
        id: 1,
        skill: 'accounting'
      },
      {
        id: 2,
        skill: 'customer service'
      }
    ],
    description: 'We value our clients'
  }
];
