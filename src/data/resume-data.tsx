/** @jsxImportSource react */
import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import React from 'react';

export const RESUME_DATA = {
  name: "Evan Chesnokov",
  initials: "EC",
  location: "Tbilisi, Georgia",
  locationLink: "https://www.google.com/maps/place/Tbilisi",
  // about:
  //   "AI product manager, coding enthusiast, ex-founder of the GenAI startup",
  summary: (
    <>
      AI specialist skilled in prompt engineering and LLM application development. I build and launch AI products from 0→1, 
      with expertise in both technical implementation and product strategy. Self-taught dev comfortable coding full-stack 
      applications (TypeScript, React, Node.js) and launching experiments (Python, Jypiter Notebooks, etc.) while also leading teams to deliver production-ready MVPs.
    </>
  ),
  avatarUrl: "/evan.png",
  contact: {
    email: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/chesnokovivan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/evan-chesnokov",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Saint Petersburg State University",
      degree: "Physics",
      start: "2010",
      end: "2012",
      description: "None, dropped out",
    },
  ],
  work: [
    {
      company: "Novakid",
      link: "https://www.novakidschool.com/",
      badges: ["AI", "Prompt Engineering", "Fine-tuning"],
      title: "Consultant",
      start: "2024",
      end: "Present",
      description: "Working directly with the CTO: research, design, implementation, and launch of AI-powered MVPs",
    },
    {
      company: "skl.vc",
      link: "https://skl.vc",
      badges: ["Remote", "AI", "LLMs"],
      title: "Senior Prompt Engineer",
      start: "2024",
      end: "2025",
      description: (
        <>
          Built the LLM part of the AI Recruiter called <a href="https://aivy.cc/" target="_blank" rel="noopener noreferrer">Aivy.cc</a>, a startup that helps companies find candidates for their open positions.
        </>
      ),
    },
    {
      company: "AI Applied Consultant",
      link: "https://evanchesnokov.com/",
      badges: ["AI", "Product Management"],
      title: "Founder",
      start: "2022",
      end: "Present",
      description: (
        <>
          Consulting startups and product teams in LLMs, AI pipelines, and product management. <br />
          Clients: Kaspersky, Sber, Neiro, etc.
        </>
      ),
    },
    {
      company: "Chattterbox",
      link: "https://chatterbox.one/",
      badges: ["Remote", "AI", "LLMs", "Product"],
      title: "Co-founder",
      start: "2023",
      end: "2023",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>Chatterbox is an AI chatting assistant for niche content creators</li>
            <li>Spearheaded product, design, marketing, finetuning and fundraising for a LLM-powered product</li>
            <li>Drove 7% week-over-week organic user growth and scaled revenue to $3K monthly</li>
            <li>Achieved a 37% user retention rate and implemented AI text and voice generation technologies</li>
          </ul>
        </>
      ),
    },
    {
      company: "Replika",
      link: "https://replika.ai",
      badges: ["Remote", "AI", "Product Management"],
      title: "Senior Product Manager",
      start: "2022",
      end: "2022",
      // description: "Launched a new AI product for business customers in 3,5 months with its own API resulting in 20M+ end users",
    },
    {
      company: "TripleTen",
      link: "https://tripleten.com",
      badges: ["Product Management", "UX Research"],
      title: "Product Manager",
      start: "2020",
      end: "2021",
      // description: "Owned the activation part of the product funnel — increased retention by 4% by directing usability studies and redesigning the main points of the user journey",
    },
  ],
  skills: [
    "Founder experience",
    "Generative NN",
    "LLMs",
    "Prompt Engineering",
    "End-to-end product management"
  ],
  projects: [],
} as const;
