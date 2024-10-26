"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-900 min-h-screen p-6 md:p-12 lg:p-20 space-y-16">
      <header className="text-center mb-12">
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-purple-800 hover:scale-105 transition-transform duration-500">Mihiresh Joshi</h1>
          <p className="text-lg md:text-xl text-gray-700 mt-4">AI Engineer | Back-End Developer | Data Science Enthusiast</p>
          <div className="mt-6 space-x-4">
            <a href="https://www.linkedin.com/in/mihiresh-joshi-651423207/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 underline transition-colors duration-300">LinkedIn</a>
            <a href="https://github.com/mihireshjoshi" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 underline transition-colors duration-300">GitHub</a>
            <a href="mailto:mihireshsjoshi@gmail.com" className="text-indigo-600 hover:text-indigo-800 underline transition-colors duration-300">Email</a>
            <span className="block md:inline text-gray-700">| +91 98334 23018</span>
          </div>
        </motion.div>
      </header>

      {/* Section Wrapper */}
      <div className="space-y-16">
        {/* Profile Photo Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-indigo-100 overflow-hidden shadow-lg ring-4 ring-indigo-200 rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image src="/images/profile.jpg" alt="Profile" width={160} height={160} className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.section 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white p-8 rounded-2xl shadow-2xl transform hover:-rotate-1 transition-transform duration-500"
        >
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Education</h2>
          <div className="space-y-4 text-lg">
            <p><strong>B.Tech in CE Data Science</strong></p>
            <p>Dr. D.Y. Patil, RAIT</p>
            <p>CGPA: 9.46/10 (as of Sem 6) | 2021 - 2025</p>
            <p className="mt-6"><strong>HSC</strong></p>
            <p>St. Xavier’s Mumbai, 84.83% | 2021</p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-r from-indigo-100 via-pink-100 to-purple-100 p-8 rounded-2xl shadow-2xl"
        >
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Skills</h2>
          <p><strong>Programming:</strong> Python, C, Java</p>
          <p><strong>Development:</strong> HTML, CSS, JavaScript, FastAPI, Flask, React Native, Next.js</p>
          <p><strong>Databases:</strong> MySQL, Supabase, MongoDB</p>
          <p><strong>Data Science:</strong> ML, Statistics, NLP, GenAI, Speech Cloning</p>
          <p><strong>Tools:</strong> VS Code, GitHub, Vercel, Figma, PowerBI, R Studio</p>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white p-8 rounded-2xl shadow-2xl"
        >
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Projects</h2>
          <div className="space-y-8">
            <ProjectItem title="Rupee Genie" role="AI Engineer" date="June 2024" description="Implemented fraud detection and QR payment functionality. Multilingual chatbot supporting 12 languages." imageSrc="/images/rupee-genie.png" />
            <ProjectItem title="Hisaab-Book" role="Team Lead" date="May 2024" description="Inventory management system with image detection and voice commands, supporting 12 Indic languages." imageSrc="/images/hisaab-book.png" />
            <ProjectItem title="AuthentiFace" role="ML Engineer" date="Nov 2023" description="Secure employee emailing platform with two-factor facial recognition." imageSrc="/images/authentiface.png" />
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-r from-indigo-100 via-pink-100 to-purple-100 p-8 rounded-2xl shadow-2xl"
        >
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Experience</h2>
          <ExperienceItem title="Code For Good - JPMorgan Chase" role="AI Engineer" date="June 2024" description="Shortlisted from 50,000 applicants to assist a Non-Profit." />
          <ExperienceItem title="Computer Society of India - RAIT" role="ML Engineer" date="June 2023" description="Implemented Student Placement Predictor with real college data." />
        </motion.section>

        {/* Achievements Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white p-8 rounded-2xl shadow-2xl"
        >
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Achievements</h2>
          <AchievementItem title="TIAA Retire-Thon Finalist" date="June 2024" description="Reached the Finals for creating FutureFund." />
          <AchievementItem title="Bhashini Sprint Finalist" date="May 2024" description="Finalist at a National Level Hackathon." />
          <AchievementItem title="AI Ideathon Winner" date="March 2024" description="First Place at AI Ideathon during AI Conclave 2024." />
        </motion.section>
      </div>
    </div>
  );
};

// ProjectItem Component with Image
interface ProjectItemProps {
  title: string;
  role: string;
  date: string;
  description: string;
  imageSrc: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, role, date, description, imageSrc }) => (
  <motion.div
    className="p-6 bg-white rounded-lg shadow-lg transform transition-transform hover:-rotate-1 hover:scale-105"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <Image src={imageSrc} alt={title} width={400} height={250} className="rounded-lg mb-4 shadow-md object-cover w-full h-64" />
    <h3 className="font-semibold text-xl">{title}</h3>
    <p className="text-sm text-gray-600">{role} | {date}</p>
    <p className="mt-2 text-gray-700">{description}</p>
  </motion.div>
);

interface ExperienceItemProps {
  title: string;
  role: string;
  date: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, role, date, description }) => (
  <div className="p-6 bg-indigo-50 rounded-lg shadow-lg">
    <h3 className="font-semibold text-xl">{title}</h3>
    <p className="text-sm text-gray-600">{role} | {date}</p>
    <p className="mt-2 text-gray-700">{description}</p>
  </div>
);

interface AchievementItemProps {
  title: string;
  date: string;
  description: string;
}

const AchievementItem: React.FC<AchievementItemProps> = ({ title, date, description }) => (
  <div className="p-6 bg-purple-50 rounded-lg shadow-lg">
    <h3 className="font-semibold text-xl">{title}</h3>
    <p className="text-sm text-gray-600">{date}</p>
    <p className="mt-2 text-gray-700">{description}</p>
  </div>
);

export default Portfolio;