// Portfolio.tsx
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPython, FaJava, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiFastapi, SiNextdotjs, SiMongodb, SiNumpy, SiReact } from "react-icons/si";
import { Parallax } from "react-parallax";

const Portfolio: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen p-6 md:p-12 lg:p-20 space-y-16">
      {/* Header */}
      <header className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-400 hover:scale-105 transition-transform duration-500">
          Mihiresh Joshi
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4">
          AI Engineer | Back-End Developer | Data Science Enthusiast
        </p>
        <div className="mt-6 space-x-6 text-2xl flex justify-center">
          <a href="https://www.linkedin.com/in/mihiresh-joshi-651423207/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-500 transition-transform duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/mihireshjoshi" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-500 transition-transform duration-300">
            <FaGithub />
          </a>
          <a href="mailto:mihireshsjoshi@gmail.com" className="text-indigo-400 hover:text-indigo-500 transition-transform duration-300">
            <FaEnvelope />
          </a>
        </div>
      </header>

      {/* Profile Photo with Parallax Effect */}
      <Parallax bgImage="/images/bg-abstract.jpg" strength={300}>
        <div data-aos="fade-up">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-indigo-500 overflow-hidden shadow-lg ring-4 ring-indigo-300">
            <Image src="/images/profile.jpg" alt="Profile" width={160} height={160} className="w-full h-full object-cover" />
          </div>
        </div>
      </Parallax>

      {/* Education Section */}
      <section data-aos="fade-right" className="bg-gray-800 p-8 rounded-2xl shadow-2xl transform transition-transform hover:-rotate-1 duration-500">
        <h2 className="text-3xl font-semibold text-indigo-400 mb-6">Education</h2>
        <div className="space-y-4 text-lg">
          <p><strong>B.Tech in CE Data Science</strong></p>
          <p>Dr. D.Y. Patil, RAIT</p>
          <p>CGPA: 9.46/10 (as of Sem 6) | 2021 - 2025</p>
          <p className="mt-6"><strong>HSC</strong></p>
          <p>St. Xavier’s Mumbai, 84.83% | 2021</p>
        </div>
      </section>

      {/* Skills Section */}
      <section data-aos="fade-left" className="bg-gradient-to-r from-gray-800 via-indigo-900 to-gray-800 p-8 rounded-2xl shadow-2xl space-y-4">
        <h2 className="text-3xl font-semibold text-indigo-400 mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillBlock icon={<FaPython />} title="Programming" skills="Python, C, Java" />
          <SkillBlock icon={<SiNextdotjs />} title="Development" skills="HTML, CSS, JavaScript, FastAPI, Flask, React Native, Next.js" />
          <SkillBlock icon={<FaDatabase />} title="Databases" skills="MySQL, Supabase, MongoDB" />
          <SkillBlock icon={<SiNumpy />} title="Data Science" skills="ML, Statistics, NLP, GenAI, Speech Cloning" />
          <SkillBlock icon={<SiReact />} title="Tools" skills="VS Code, GitHub, Vercel, Figma, PowerBI, R Studio" />
        </div>
      </section>

      {/* Projects Section */}
      <section data-aos="fade-up" className="bg-gray-800 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-semibold text-indigo-400 mb-6">Projects</h2>
        <div className="space-y-8">
          <ProjectItem title="Rupee Genie" role="AI Engineer" date="June 2024" description="Implemented fraud detection and QR payment functionality. Multilingual chatbot supporting 12 languages." imageSrc="/images/rupee-genie.png" />
          <ProjectItem title="Hisaab-Book" role="Team Lead" date="May 2024" description="Inventory management system with image detection and voice commands, supporting 12 Indic languages." imageSrc="/images/hisaab-book.png" />
          <ProjectItem title="AuthentiFace" role="ML Engineer" date="Nov 2023" description="Secure employee emailing platform with two-factor facial recognition." imageSrc="/images/authentiface.png" />
        </div>
      </section>

      {/* Experience Section */}
      <section data-aos="fade-up" className="bg-gradient-to-r from-gray-800 via-indigo-900 to-gray-800 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-semibold text-indigo-400 mb-6">Experience</h2>
        <ExperienceItem title="Code For Good - JPMorgan Chase" role="AI Engineer" date="June 2024" description="Shortlisted from 50,000 applicants to assist a Non-Profit." />
        <ExperienceItem title="Computer Society of India - RAIT" role="ML Engineer" date="June 2023" description="Implemented Student Placement Predictor with real college data." />
      </section>

      {/* Achievements Section */}
      <section data-aos="fade-up" className="bg-gray-800 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-semibold text-indigo-400 mb-6">Achievements</h2>
        <AchievementItem title="TIAA Retire-Thon Finalist" date="June 2024" description="Reached the Finals for creating FutureFund." />
        <AchievementItem title="Bhashini Sprint Finalist" date="May 2024" description="Finalist at a National Level Hackathon." />
        <AchievementItem title="AI Ideathon Winner" date="March 2024" description="First Place at AI Ideathon during AI Conclave 2024." />
      </section>
    </div>
  );
};

// Reusable Skill Block Component
interface SkillBlockProps {
  icon: React.ReactNode;
  title: string;
  skills: string;
}

const SkillBlock: React.FC<SkillBlockProps> = ({ icon, title, skills }) => (
  <div className="p-4 bg-gray-700 rounded-lg shadow-md flex items-center space-x-3" data-aos="fade-up">
    <div className="text-indigo-300 text-2xl">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-indigo-300">{title}</h3>
      <p className="mt-2 text-gray-300">{skills}</p>
    </div>
  </div>
);

// Project Item Component
interface ProjectItemProps {
  title: string;
  role: string;
  date: string;
  description: string;
  imageSrc: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, role, date, description, imageSrc }) => (
  <div data-aos="zoom-in-up" className="p-6 bg-gray-700 rounded-lg shadow-lg transition-transform hover:scale-105">
    <Image src={imageSrc} alt={title} width={400} height={250} className="rounded-lg mb-4 shadow-md object-cover w-full h-64" />
    <h3 className="font-semibold text-xl text-indigo-300">{title}</h3>
    <p className="text-sm text-gray-400">{role} | {date}</p>
    <p className="mt-2 text-gray-300">{description}</p>
  </div>
);

// Experience Item Component
interface ExperienceItemProps {
  title: string;
  role: string;
  date: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, role, date, description }) => (
  <div data-aos="fade-left" className="p-6 bg-gray-700 rounded-lg shadow-lg">
    <h3 className="font-semibold text-xl text-indigo-300">{title}</h3>
    <p className="text-sm text-gray-400">{role} | {date}</p>
    <p className="mt-2 text-gray-300">{description}</p>
  </div>
);

// Achievement Item Component
interface AchievementItemProps {
  title: string;
  date: string;
  description: string;
}

const AchievementItem: React.FC<AchievementItemProps> = ({ title, date, description }) => (
  <div data-aos="fade-right" className="p-6 bg-gray-700 rounded-lg shadow-lg">
    <h3 className="font-semibold text-xl text-indigo-300">{title}</h3>
    <p className="text-sm text-gray-400">{date}</p>
    <p className="mt-2 text-gray-300">{description}</p>
  </div>
);

export default Portfolio;
