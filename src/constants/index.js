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
  tesla,
  shopify,
  carrent,
  // netflix,
  // jobit,
  // tripguide,
  threejs,
  // twitter,
} from "../assets";
// import {twitter} from "../assets/company/twitter";
// import netflix from '../assets/netflix.jpg'
import Twitter from '../assets/Twitter.jpg'
import ecommerce from '../assets/e-commerce.webp'
import authencation from '../assets/authenction.webp'
import zoom from '../assets/zoom.png'
// import link from '../assets/link.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "X-clone",
    description:
      "Our Twitter clone provides a dynamic social networking experience, allowing users to share updates, engage in conversations, and follow interests. Enjoy real-time interactions, customizable profiles, and an intuitive interface for seamless connectivity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Twitter,
    source_code_link: "https://twitter-clone-1-i7fg.onrender.com",
  },
  {
    name: "E-commerce Shop",
    description:
      "Discover a seamless shopping experience on our e-commerce website, featuring a wide range of products, user-friendly navigation, secure payments, and fast shipping. Shop smart, save big, and enjoy exceptional customer service!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://mern-ecommerc.onrender.com/",
  },
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Experience unlimited streaming with our Netflix clone, offering a vast library of movies, TV shows, and original content. Enjoy personalized recommendations, user-friendly interface, and seamless viewing across all devices.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: netflix,
  //   source_code_link: "https://github.com/fikre4231",
  // },
  { 
    name: "Auth Clone",
    description:
      "Experience unlimited As a tech enthusiast, I developed a MERN stack authentication system that combines MongoDB, Express.js, React, and Node.js. This project emphasizes secure user registration and login processes, employing JWTs for authentication and bcrypt for password hashing. I’m passionate about building efficient, user-friendly web applications that prioritize security. with our Netflix cloneAs a tech enthusiast, I developed a MERN stack authentication system that combines MongoDB, Express.js, React, and Node.js. This project emphasizes secure user registration and login processes, employing JWTs for authentication and bcrypt for password hashing. I’m passionate about building efficient, user-friendly web applications that prioritize security., offering a vast library of movies, TV shows, and original content. Enjoy personalized recommendations, user-friendly interface, and seamless viewing across all devices.",
    tags: [
      {
        name: "react js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "Green-text-gradient",
      },
    ],
    image: authencation ,
    source_code_link: "https://auth-jpk9.onrender.com/",
  },
  { 
    name: "Zoom Clone",
    description:
      "A Zoom clone is a video conferencing platform that replicates the features of Zoom, allowing users to host virtual meetings, webinars, and online classes. It typically includes functionalities like screen sharing, chat, breakout rooms, and recording options, catering to businesses, educators, and individuals seeking seamless online communication.",
    tags: [
      {
        name: "next js",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "Green-text-gradient",
      },
    ],
    image: zoom ,
    source_code_link: "https://yitbarekyoom.netlify.app",
  },
  
  
];

export { services, technologies, experiences, testimonials, projects };
