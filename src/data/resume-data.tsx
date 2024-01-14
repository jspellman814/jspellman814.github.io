import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "John Spellman",
  initials: "JS",
  location: "United States",
  locationLink: "https://www.google.com/maps/place/United+States",
  about:
    "Senior Software Engineer",
  summary:
    "I'm an experienced software engineer with a passion for delivering innovative solutions that empower organizations and users alike. My specialties include: leading software development life cycles with agile methodologies, integrating modern technologies into existing workflows, introducing best practices, designing and implementing technical architecture, enabling unique and tailored solutions for clients, conducting peer code reviews, and acting as a subject matter expert in software engineering matters. My vision is to continually push the boundaries of software engineering, contributing to the evolution of user-centric and innovative solutions. Through effective collaboration with clients and internal teams, I strive to translate concepts into reality while ensuring that every project is a testament to engineering excellence and user satisfaction.",
  avatarUrl: "https://avatars.githubusercontent.com/u/17913282?v=4",
  personalWebsiteUrl: "http://johnjspellman.com",
  contact: {
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jspellman814",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/john-s-86039262/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Rider University",
      degree: "BSBA in Computer Information Systems",
      start: "2009",
      end: "2013",
    },
  ],
  work: [
    {
      company: "NBCUniversal",
      link: "https://www.nbcuniversal.com/",
      badges: ["Remote"],
      title: "Senior Software Engineer",
      start: "June 2023",
      end: "Present",
      description:
        "As a member of the NBCU Local Backend Team, I am responsible for the architecture, development, and operations of workplace solutions used globally by NBCUniversal employees and partners. The solutions span across a portfolio of applications including CMS sites, workflow systems, mobile first employee experience, and end user support. Technologies: PHP, React, REST APIs.",
    },
    {
      company: "Pantheon Platform",
      link: "https://pantheon.io/",
      badges: ["Remote"],
      title: "Software Engineer II",
      start: "October 2021",
      end: "June 2023",
      description:
        "As part of the CMS Ecosystem team, I played a critical role in delivering the best possible developer experience for the Agencies that used Pantheon's WordPress environment and related software. I helped Pantheon to continue to innovate and manage complexities as we (and our data) grew in size, feature depth, and across data centers. Technologies: PHP, Python, Node.js, Go, React, GraphQL, Chef, Kubernetes.",
    },
    {
      company: "10up",
      link: "https://10up.com/",
      badges: ["Remote"],
      title: "Web Engineer → Senior Web Engineer",
      start: "July 2019",
      end: "October 2021",
      description:
        "Developed complex WordPress plugins and/or themes primarily using PHP. Data migration planning and implementation with custom WP-CLI scripts. Mentored engineers and providing code reviews. Drove strategy and lead back end technical vision for large projects. Leveraged WordPress’ APIs and extended the WordPress admin experience.",
    },
    {
      company: "TrestleMedia → CHIEF → U.Group",
      link: "https://u.group/",
      badges: ["Hybrid"],
      title: "WordPress Developer → Web Developer → Senior Web Developer",
      start: "Aug 2015",
      end: "July 2019",
      description: "Lead the development of WordPress sites.",
    },
    {
      company: "Merrick Towle Creative",
      link: "https://www.merricktowle.com/",
      badges: ["In Office"],
      title: "Web Developer",
      start: "Jan 2014",
      end: "Aug 2015",
      description: "Developed custom WordPress themes in collaboration with the creative department. Built marketing email templates for real estate industry clients.",
    },
  ],
  skills: [
    "PHP",
    "JavaScript",
    "React",
    "Node.js",
    "REST APIs",
    "GraphQL",
    "Git",
  ],
  projects: [
    
  ],
} as const;
