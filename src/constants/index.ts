import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  node,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Frontend Developer',
    icon: web,
  },

  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Ecommerce Developer',
    icon: mobile,
  },
  {
    title: 'Machine Learning Engineer',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Frontend Developer',
    companyName: 'Cashier Live',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'June 2015 - August 2019',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Collaborated with UI/UX designers to implement designs and enhance user interactions based on usability principles.',
      'Conducted unit testing and participated in debugging sessions to identify and resolve issues, ensuring robust and bug-free application releases.',
    ],
  },
  {
    title: 'Backend Developer',
    companyName: 'Liner Travel Company',
    icon: node,
    iconBg: '#E6DEDD',
    date: 'Sep 2019 - Feb 2021',
    points: [
      'Assisted in developing backend services using Node.js and Django, focusing on API development and integration with frontend applications.',
      'Implemented authentication mechanisms and data validation to enhance security and reliability of APIs.',
      'Implemented and managed databases including MySQL, PostgreSQL, Firebase, Supabase and MongoDB, ensuring data integrity and performance.',
      'Implemented authentication and authorization mechanisms using JWT tokens and OAuth protocols.',
    ],
  },
  {
    title: 'Full stack Developer',
    companyName: 'Transat A.T. Inc.',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Mar 2021 - Jan 2023',
    points: [
      'Designed and implemented responsive web applications using frontend technologies using JavaScript frameworks like React.js, Next.js and Angular.',
      'Developed backend services using Node.js with Express.js, handling RESTful APIs and integrating with various databases (MySQL, MongoDB).',
      'Collaborated with clients to gather requirements and deliver solutions that boosted their business operations, resulting in an average 20% increase in efficiency.',
      'Deployed applications on cloud platforms such as AWS (Amazon Web Services) and managed containerized applications with Docker and Kubernetes.',
    ],
  },
  {
    title: 'Senior Full Stack Developer & JavaScript Expert',
    companyName: 'eMerge Interactive',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Feb 2023 - April 2024',
    points: [
      'Designed and implemented responsive web applications using frontend technologies using JavaScript frameworks like React.js, Next.js and Angular.',
      'Developed backend services using Node.js with Express.js, handling RESTful APIs and integrating with various databases (MySQL, MongoDB).',
      'Collaborated with clients to gather requirements and deliver solutions that boosted their business operations, resulting in an average 20% increase in efficiency.',
      'Deployed applications on cloud platforms such as AWS (Amazon Web Services) and managed containerized applications with Docker and Kubernetes.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Denys proved me wrong.',
    name: 'Marie Johnson',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Denys does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Denys optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'James Smith',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
