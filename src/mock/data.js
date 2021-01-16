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
  paragraphOne: 'I started in this field when I was 12 years old, which gave me the time to go from programming to web development and then to network and system security to come back to mobile development and during all these years I had the time to make hundreds or even thousands of mistakes which taught me a lot of things and allowed me to develop a certain rigor in the work and especially to have enough experience to solve a problem in the shortest possible time and always progress in the best way for each new project',
  paragraphTwo: 'My goal in life is to learn more and more to always do the best and at the same time to share my knowledge to help beginners not make the same mistakes as me and to learn faster and better.',
  paragraphThree: ' ',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'forlerning.png',
    title: 'To learn Flutter',
    info: 'these projects are beginners projects that I did during my framwork flutter training, and of course they are not only mobile applications but much more, this is possible because flutter is a tool that allows us to build the same code for different platforms which include, android, ios, chrome, web, desktop, etc.',
    info2: ' ',
    url: ' ',
    repo: ' ', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'proApp.png',
    title: 'professional apps',
    info: 'These two projects that I realized are commissioned by companies . The first one is a customer management system (CRM), which allows each customer to make an appointment with the company for the repair of his car and much more.',
    info2: 'The second application is an (ERP) that allows the company or store to manage its inventory and these sales while including a contact book and an instagram bot.',
    url: ' ',
    repo: ' ', // if no repo, the button will not show up
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
