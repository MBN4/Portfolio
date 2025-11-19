import type { Project, Skill, Experience, Testimonial } from './types';
import { MongoDBIcon, ExpressIcon, ReactIcon, NodeJsIcon, NextJsIcon, JavaScriptIcon, TailwindIcon, GitIcon, FirebaseIcon, ReactNativeIcon } from './components/Icons';

export const personalData = {
  name: "M. Bilal",
  designation: "Full-Stack Developer",
  roles: ["MERN Stack Expert", "Next.js Specialist", "Mobile App Developer"],
  about: "A passionate Full-Stack Developer with 1+ years of experience specializing in the MERN stack and mobile development with React Native. Skilled in building and optimizing responsive, user-friendly web and mobile applications, from UI implementation to backend integration. Eager to tackle new challenges and continuously improve by staying updated with the latest web technologies.",
  cvUrl: "/M_Bilal_Resume.pdf",
  githubProfileUrl: "https://github.com/MBN4",
};

export const projectsData: Project[] = [
  {
    title: "ReelBite",
    techStack: ["Node.js", "Express", "MongoDB", "JavaScript"],
    description: "A full-stack web app for food discovery through short-form videos. Built with Node.js, it allows restaurants and chefs to upload content, offering users an engaging, video-first browsing experience.",
    imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubUrl: "https://github.com/MBN4/ReelBite",
    liveUrl: "#",
  },
  {
    title: "Cost Calculator",
    techStack: ["React", "Next.js", "Ant Design", "JavaScript"],
    description: "An intuitive Next.js and React app to quickly estimate mobile app development costs. It provides a transparent breakdown for popular app templates or custom projects to help with budget planning.",
    imageUrl: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubUrl: "https://github.com/MBN4/cost-calculator-project",
    liveUrl: "#",
  },
  {
    title: "AI Business Analyst",
    techStack: ["React", "Next.js", "Firebase", "GPT"],
    description: "A personal senior consultant powered by GPT. The app intelligently asks questions to understand a user's vision for a web or app idea, providing budget guidance and refining the concept.",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubUrl: "https://github.com/MBN4/Ai-Business-Analyst",
    liveUrl: "#",
  },
  {
    title: "Health Portal",
    techStack: ["React", "Next.js", "MongoDB", "Express"],
    description: "An intelligent dashboard to simplify booking medical appointments. The system matches users with the most suitable specialist based on their condition and schedules the consultation seamlessly.",
    imageUrl: "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubUrl: "https://github.com/MBN4/health-portal",
    liveUrl: "#",
  },
];

export const skillsData: Skill[] = [
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextJsIcon },
    { name: "Node.js", icon: NodeJsIcon },
    { name: "Express.js", icon: ExpressIcon },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "Firebase", icon: FirebaseIcon },
    { name: "React Native", icon: ReactNativeIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "Git", icon: GitIcon },
];

export const experienceData: Experience[] = [
  {
    year: "Nov 2023 - Present",
    role: "Associate Software Engineer",
    company: "Clustox",
    description: "Developing and optimizing a MERN stack website, collaborating with UI/UX teams, and integrating third-party APIs to enhance functionality and performance.",
  },
  {
    year: "Jun 2023 - Dec 2023",
    role: "Web & Mobile App Development",
    company: "Akhuwat",
    description: "Developed and maintained mobile applications for both iOS and Android using Flutter, focusing on optimizing application performance for a better user experience.",
  },
  {
    year: "2020 - 2024",
    role: "BS in Computer Science",
    company: "The Orbit Institute",
    description: "Graduated with a GPA of 3.09, gaining a strong foundation in computer science principles, algorithms, and software development methodologies.",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    quote: "Bilal is a developer who truly listens. He took our rough concept and transformed it into a sleek, functional reality, exceeding all our expectations. His dedication and technical skill are top-notch.",
    name: "Jane Doe",
    title: "CEO of Tech Innovations",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    quote: "Working with Bilal was a breeze. He's not only a proficient MERN stack developer but also a great communicator. He kept us in the loop throughout the project and delivered a high-quality product on time.",
    name: "John Smith",
    title: "Project Manager at Creative Solutions",
    imageUrl: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    quote: "The mobile app Bilal developed for us has been a game-changer. His expertise in React Native is evident in the app's smooth performance and intuitive design. We've seen a significant increase in user engagement since launch.",
    name: "Emily White",
    title: "Founder of HealthUp",
    imageUrl: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
