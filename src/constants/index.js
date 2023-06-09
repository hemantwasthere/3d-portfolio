import {
  alive,
  backend,
  chatgpt,
  clang,
  cloudimg,
  creator,
  css,
  devsnest,
  digi,
  git,
  gitalt,
  html,
  java,
  javascript,
  mobile,
  mysql,
  nextjs,
  nodejs,
  reactjs,
  sumz,
  tailwind,
  typescript,
  vuejs,
  web,
  spotify
} from "../assets";

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
  {
    id: "blogs",
    title: "Blogs",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Open Source Contributor",
    icon: mobile,
  },
  {
    title: "Hungry Learner",
    icon: backend,
  },
  {
    title: "Hardcore Gamer",
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
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
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: clang,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer Intern",
    company_name: "A.live",
    icon: alive,
    iconBg: "#53E1AD",
    date: "Sep 2022 - Dec 2022",
    points: [
      "Developed the website using React.js, a popular JavaScript library for building user interfaces.",
      "Integrated web3.js, a library for interacting with the Ethereum blockchain, to add NFT related functionality to the website.",
      "Converted the React website to Next.js, a React-based framework for server-side rendering, for improved SEO and faster load times.",
      "Worked with Strapi, an open-source headless CMS, as the backend for custom functions and API calls.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Digi-k-labs",
    icon: digi,
    iconBg: "#fff",
    date: "Aug 2022 - Oct 2022",
    points: [
      "Worked on an open-source npm package(lightvue) with over 450+ weekly downloads in Vue.js.",
      "Innovated an icon picker component compatible with both Vue 2.x and Vue 3.x.",
      "Developed a fully-fledged website for their form builder tool used by many users.",
      "Built over 40+ generic, customizable, props driven and fully responsive components.",
    ],
  },
  {
    title: "Frontend Mentor, Contributor",
    company_name: "Devsnest",
    icon: devsnest,
    iconBg: "#18191A",
    date: "Aug 2022 - Oct 2022",
    points: [
      "Devsnest is an organization with over 21k+ community providing mentorship, guidance, and resources to students through a peer learning-driven mindset.",
      "Mentored and solved Doubts of over 50+ students in the Community.",
      "Implemented over 30+ practice questions for their ongoing Full Stack Developer Bootcamp on their site devsnest.in",
      "Tested, Debugged, and Revamped code in each question.",
      "Write over 50+ test cases using Chai.js and Mocha to test questions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Hemant is an exceptional frontend developer with impressive technical skills and attention to detail. His problem-solving abilities and collaborative nature make him a valuable asset to any team. It has been a pleasure working with him, and I highly recommend him for his talent and dedication.",
    name: "Piyush Garg",
    designation: "Founder",
    company: "Teachyst.com",
    image: "https://avatars.githubusercontent.com/u/44976328?v=4",
  },
];

const projects = [
  {
    name: "Spotify",
    description:
      "Developed Spotify-inspired app with Next.js 13 & TailwindCSS. Integrated Supabase for authentication, preferences, and song data. Enabled secure payments via Stripe API and created custom features like authentication, song upload, search, and playback controls.",
    tags: [
      {
        name: "next.js 13",
        color: "orange-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/hemantwasthere/spotify",
    live_demo_link: "https://spotify-dread.vercel.app/",
  },
  {
    name: "SumZ",
    description:
      "Simplify your reading with Summarizer, an open-source article summarizer that transforms lengthy articles into clear and concise summaries",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sumz,
    source_code_link: "https://github.com/hemantwasthere/ai-sumz",
    live_demo_link: "https://zsum.netlify.app/",
  },
  {
    name: "ChatGPT Alt",
    description:
      "An AI Conversational Interaction Platform that allows users to chat with a GPT-3 powered chatbot by using openai API. The chatbot is trained on a dataset of over 100,000+ conversations.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chatgpt,
    source_code_link: "https://github.com/hemantwasthere/ChatGPT-Clone",
    live_demo_link: "https://chatgpt-alt.vercel.app",
  },
  {
    name: "Git Alt",
    description:
      "A Github profile viewer built using NextJS and Github API. This app can fetch your github profile details by entering your username in the searchbox and hit enter and display it to the client.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "githubapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gitalt,
    source_code_link: "https://github.com/hemantwasthere/GitHub-Clone",
    live_demo_link: "https://gitalt.netlify.app",
  },
  {
    name: "CloudAge",
    description:
      "Designed a image uploading application using NextJS. This app can store your images and gifs to the firebase cloud with the delete functionality and displays them to the client.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cloudimg,
    source_code_link: "https://github.com/hemantwasthere/Image-Uploader",
    live_demo_link: "https://image-uploader-by-me.netlify.app/",
  },
];

export { experiences, projects, services, technologies, testimonials };

