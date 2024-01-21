import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Evan Chesnokov",
  initials: "ec",
  location: "Tbilisi, Georgia",
  locationLink: "https://www.google.com/maps/place/Tbilisi",
  about:
    "AI product manager, coding enthusiast, ex-founder of the GenAI startup",
  summary:
    "As an AI product manager and builder, I have launched multiple products from 0 → 1. I love leading product teams as well as building things by myself. Currently, I work mostly with TypeScript, React, Node.js. Love coffee.",
  avatarUrl: "https://avatars.githubusercontent.com/chesnokovivan",
  personalWebsiteUrl: "https://evanchesnokov.com",
  contact: {
    email: "chesnokovivan@gmail.com",
    tel: "+995551159503",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/chesnokovivan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/evan-chesnokov/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/evan_chesnokov",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Physics, Saint Petersburg State University",
      degree: "None, dropped out",
      start: "2010",
      end: "2012",
    },
  ],
  work: [
    {
      company: "AI Product Consultant",
      link: "https://evanchesnokov.com",
      badges: ["Remote"],
      title: "Founder",
      logo: ParabolLogo,
      start: "2021",
      end: "Today",
      description:
        "Consulting startups and product teams in LLMs, AI pipelines, and product management",
    },
    {
      company: "Chattterbox",      
      badges: ["Remote"],
      title: "Co-founder",
      logo: ClevertechLogo,
      start: "2023",
      end: "2023",
      description:
        "Chatterbox is an AI chatting assistant for niche content creators. I spearheaded product, design, marketing, finetuning and fundraising for a LLM-powered product. Drove 7% week-over-week organic user growth and scaled revenue to $3K monthly. Achieved a 37% user retention rate and implemented AI text and voice generation technologies",
    },
    {
      company: "Replika",
      link: "https://replika.com/",
      badges: [],
      title: "Senior Product Manager",
      logo: JojoMobileLogo,
      start: "2022",
      end: "2022",
      description:
        "Launched a new AI product for business customers in 3,5 months with its own API resulting in 20M+ end users",
    },
    {
      company: "TripleTen",
      link: "https://tripleten.com/",
      badges: [],
      title: "Product Manager",
      logo: NSNLogo,
      start: "2020",
      end: "2021",
      description: "Owned the activation part of the product funnel — increased retention by 4% by directing usability studies and redesigning the main points of the user journey",
    },
  ],
  skills: [
    "Founder experience",
    "Generative NN",
    "LLMs",
    "TypeScript",
    "React/Next.js",
    "End-to-end product management",
  ],
  projects: [
    {
      title: "OnelinerGPT",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vercel",
        "OpenAI API",
        "Upstash",
        "Bytescale",
      ],
      description: "An app that helps to generate a dating profile bio with AI",
      logo: ConsultlyLogo,
      link: {
        label: "oneliner-gpt.vercel.app.",
        href: "https://oneliner-gpt.vercel.app/",
      },
    },
  ],
} as const;
