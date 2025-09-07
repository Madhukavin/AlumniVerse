import type { Alumni, Job, Event } from './types';

export const fieldsOfStudy = [
  "Computer Science", "Mechanical Engineering", "Business Administration", "Graphic Design", "Data Science", "Marketing"
];

export const locations = [
  "New York, NY", "San Francisco, CA", "Chicago, IL", "Austin, TX", "Seattle, WA", "Remote"
];


export const alumni: Alumni[] = [
  {
    id: "1",
    name: "Jane Doe",
    avatarUrl: "https://picsum.photos/100/100?random=1",
    graduationYear: 2018,
    fieldOfStudy: "Computer Science",
    location: "San Francisco, CA",
    skills: ["React", "Node.js", "GraphQL", "TypeScript"],
  },
  {
    id: "2",
    name: "John Smith",
    avatarUrl: "https://picsum.photos/100/100?random=2",
    graduationYear: 2015,
    fieldOfStudy: "Business Administration",
    location: "New York, NY",
    skills: ["Financial Modeling", "Marketing Strategy", "Project Management"],
  },
  {
    id: "3",
    name: "Emily White",
    avatarUrl: "https://picsum.photos/100/100?random=3",
    graduationYear: 2020,
    fieldOfStudy: "Graphic Design",
    location: "Chicago, IL",
    skills: ["UI/UX Design", "Figma", "Adobe Creative Suite"],
  },
  {
    id: "4",
    name: "Michael Brown",
    avatarUrl: "https://picsum.photos/100/100?random=4",
    graduationYear: 2019,
    fieldOfStudy: "Mechanical Engineering",
    location: "Austin, TX",
    skills: ["CAD", "SolidWorks", "Product Development"],
  },
  {
    id: "5",
    name: "Sarah Green",
    avatarUrl: "https://picsum.photos/100/100?random=5",
    graduationYear: 2021,
    fieldOfStudy: "Data Science",
    location: "Seattle, WA",
    skills: ["Python", "Machine Learning", "TensorFlow", "Data Visualization"],
  },
  {
    id: "6",
    name: "David Black",
    avatarUrl: "https://picsum.photos/100/100?random=6",
    graduationYear: 2017,
    fieldOfStudy: "Marketing",
    location: "Remote",
    skills: ["SEO", "Content Marketing", "Google Analytics"],
  },
  {
    id: "7",
    name: "Laura Blue",
    avatarUrl: "https://picsum.photos/100/100?random=7",
    graduationYear: 2022,
    fieldOfStudy: "Computer Science",
    location: "San Francisco, CA",
    skills: ["Next.js", "Vercel", "Serverless Functions", "Web Performance"],
  },
  {
    id: "8",
    name: "Chris Yellow",
    avatarUrl: "https://picsum.photos/100/100?random=8",
    graduationYear: 2016,
    fieldOfStudy: "Business Administration",
    location: "New York, NY",
    skills: ["Venture Capital", "Startups", "Negotiation"],
  }
];

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    company: "TechCorp",
    location: "San Francisco, CA",
    description: "Build and maintain our design system and user-facing features using React and TypeScript.",
    postedBy: "Jane Doe",
    avatarUrl: "https://picsum.photos/100/100?random=1",
  },
  {
    id: "2",
    title: "Marketing Manager",
    company: "Innovate Inc.",
    location: "New York, NY",
    description: "Lead our product marketing strategy and campaigns to drive growth and user acquisition.",
    postedBy: "John Smith",
    avatarUrl: "https://picsum.photos/100/100?random=2",
  },
  {
    id: "3",
    title: "Product Designer",
    company: "Creative Solutions",
    location: "Remote",
    description: "Design intuitive and beautiful user experiences for our suite of creative tools.",
    postedBy: "Emily White",
    avatarUrl: "https://picsum.photos/100/100?random=3",
  },
  {
    id: "4",
    title: "Data Scientist",
    company: "FutureAI",
    location: "Seattle, WA",
    description: "Develop machine learning models to solve complex problems in the AI ethics space.",
    postedBy: "Sarah Green",
    avatarUrl: "https://picsum.photos/100/100?random=5",
  },
];

export const events: Event[] = [
  {
    id: "1",
    name: "Alumni Annual Gala",
    date: "October 26, 2024",
    location: "Grand Ballroom, New York",
    imageUrl: "https://picsum.photos/600/400?random=9",
    description: "Join us for a night of celebration, networking, and recognition of outstanding alumni.",
  },
  {
    id: "2",
    name: "Bay Area Tech Mixer",
    date: "November 15, 2024",
    location: "TechHub SF, San Francisco",
    imageUrl: "https://picsum.photos/600/400?random=10",
    description: "Connect with fellow alumni in the tech industry. Drinks and appetizers will be served.",
  },
  {
    id: "3",
    name: "Virtual Career Fair",
    date: "December 5, 2024",
    location: "Online",
    imageUrl: "https://picsum.photos/600/400?random=11",
    description: "Explore job opportunities from companies founded or led by our esteemed alumni.",
  },
  {
    id: "4",
    name: "Austin Founders Meetup",
    date: "January 20, 2025",
    location: "Capital Factory, Austin",
    imageUrl: "https://picsum.photos/600/400?random=12",
    description: "A casual get-together for alumni who are founders, investors, or interested in the startup scene.",
  }
];
