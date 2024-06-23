import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  php,
  mysql,
  git,
  java,
  meta,
  gmail,
  portfolio,
  shopify,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "../assets";

// Navbar Links
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Services
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "OOPS Programming ",
    icon: creator,
  },
];

// Technologies
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
    name: "Php",
    icon: php,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "MySql",
    icon: mysql,
  },
];

// Experiences
const experiences = [
  {
    title: "React.js Developer",
    company_name: "Gmail",
    icon: gmail,
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
    title: "Java Developer",
    company_name: "Portfolio",
    icon: portfolio,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing robust Java applications.",
      "Collaborating with teams to deliver quality software solutions.",
      "Ensuring code quality through testing and code reviews.",
      "Implementing best practices for efficient development.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Emp System",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using php and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Java Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing full-stack web applications using Java technologies.",
      "Collaborating with multidisciplinary teams to deliver high-quality software solutions.",
      "Implementing responsive design and ensuring compatibility across various browsers.",
      "Participating in code reviews and providing feedback to enhance team performance.",
    ],
  },
];

// Testimonials
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Viraj proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Viraj does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Viraj optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Lora Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// Projects
const projects = [
  {
    name: "Chat App",
    description:
      "Our chat app is a modern messaging platform that offers seamless, real-time communication with advanced features for secure and efficient interactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    // source_code_link: "https://github.com/Viraj37935/Chat-App",
    live_site_link: "https://chat-app-rljs.onrender.com",
  },
  {
     name: "Apple Website",
      description:
        "The web application that enables users to search for development services empowers them with the tools and resources needed to turn their ideas into reality.",
      tags: [
        {
          name: "react ",
          color: "blue-text-gradient",
        },
        {
          name: "Three js ",
          color: "green-text-gradient",
        },
        {
          name: "GSAP",
          color: "pink-text-gradient",
        },
      ],
      image: project2,
      live_site_link: "https://apple-web-mu.vercel.app/",
    },
  //  {
  //    name: "Custome Your T-Shirt",
  //    description:
  //      "Create your unique and exclusive shirt with our brand-new 3D customization tool. Unleash your imagination and define your own style.",
  //    tags: [
  //      {
  //       name: "react + vite",
  //        color: "blue-text-gradient",
  //      },
  //      {
  //        name: "three js",
  //        color: "green-text-gradient",
  //      },
  //      {
  //        name: "tailwind css",
  //        color: "pink-text-gradient",
  //      },
  //    ],
  //    image: project3,
  //    source_code_link:
  //    "https://github.com/Technical-Dhruv-tech/admin-dashboard",
  //    live_site_link: "https://3d-t-shirt.vercel.app/",
  //  },

  // {
  //   name: "TikTok Clone",
  //   description:
  //     "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "nodejs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project4,
  //   source_code_link: "https://github.com/Technical-Dhruv-tech/tiktok-clone",
  //   live_site_link: "https://tiktok-clone-react.vercel.app/",
  // },
  // {
  //   name: "Cryptoverse",
  //   description:
  //     "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "rapidapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project5,
  //   source_code_link: "https://github.com/Technical-Dhruv-tech/crypto-app",
  //   live_site_link: "https://reactjscryptoapp.netlify.app/",
  // },
  // {
  //   name: "Travel Advisor",
  //   description:
  //     "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "rapidapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "material-ui",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project6,
  //   source_code_link:
  //     "https://github.com/Technical-Dhruv-tech/travel-advisor",
  //   live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
