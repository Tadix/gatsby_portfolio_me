import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Said medjber / Flutter developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Medjber Said',
  subtitle: 'Technical and mobile apps solution developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I started in the field when i was 12, which gave me the time to swithch from programming to web development and then to the security the netwworks ans systems to return to mobile development and during all these years i have had time to make hundereds or even thousands of errors which i learned a lot of things and which allowed me to develop a certain rigor in the work and especially to have enough experiance to solve a problem in short outline and always progressing in the best way for each new project',
  paragraphTwo: 'I have goal in the life this is to learn more and more to always do the best and at the same time share my knowledge to help beginners not to make the same mistakes as me and to learn faster and better.',
  paragraphThree: '',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'forlerning.png',
    title: 'To learn Flutter',
    info: 'these projects are beginner projects that I realized during my learning of the framwork flutter these projects which are not only mobile applications but much more, this is possible because flutter is a tools that we allows to build the same code for different platform which includes, android, ios, chrome, web, desktop',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'proApp.png',
    title: 'professional apps',
    info: 'These two projects they are ordered by companies that I have carried out, the first is a customer management system (CRM), which allows each customer to make an appointment with the company for the repair of his car And much more.',
    info2: 'The second application is an (ERP) which allows the company or store to manage its stock and these sales while including a contact book and instagrame bot.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'linubiame@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Tadix7',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://my.indeed.com/p/saidm-qrf53d3',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/said-medjber-32201916a',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/tadix',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/massinissa.maclore.3',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
