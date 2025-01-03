"use client";

import React from "react";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    link: string;
}

const projects: Project[] = [
    {
        title: "AQI Nexus",
        description:
            "An IoT-enabled platform for real-time air quality monitoring with AI-driven forecasts and multilingual support.",
        technologies: ["React Native", "FastAPI", "IoT"],
        link: "https://github.com/mihireshjoshi/AQI-Nexus",
    },
    {
        title: "Hisaab-Book",
        description:
            "An advanced inventory management system with image detection and voice commands, supporting multiple Indic languages.",
        technologies: ["React Native", "Next.js", "FastAPI", "Supabase"],
        link: "https://github.com/mihireshjoshi/Hisaab-Book",
    },
    {
        title: "AuthentiFace",
        description:
            "A secure employee emailing platform with two-factor facial recognition to reduce unauthorized access.",
        technologies: ["HTML", "CSS", "JS", "Flask", "TensorFlow"],
        link: "https://github.com/mihireshjoshi/AuthentiFace",
    },
    {
        title: "CheatBot",
        description:
            "A chatbot trained on specific information using Retrieval-Augmented Generation (RAG).",
        technologies: ["Python", "LangChain", "ChromaDB"],
        link: "https://github.com/mihireshjoshi/CheatBot",
    },
    {
        title: "FutureFund",
        description:
            "An ANN-based software recommending investment choices for retirement across various age groups.",
        technologies: ["TensorFlow", "FastAPI", "Next.js"],
        link: "https://github.com/mihireshjoshi/FutureFund",
    },
];

const ProjectsPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
                        >
                            <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
                            <p className="text-gray-700 mt-2">{project.description}</p>
                            <ul className="mt-4 space-y-1">
                                {project.technologies.map((tech, techIndex) => (
                                    <li
                                        key={techIndex}
                                        className="inline-block bg-gray-200 text-gray-800 py-1 px-2 rounded text-sm mr-2"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline mt-4 inline-block"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
