"use client";

import React from "react";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-black text-gray-200 flex flex-col justify-center items-center">
            {/* Hero Section */}
            <div className="text-center space-y-6 w-full items-center justify-center">
                <h1 className="text-5xl md:text-7xl font-extrabold animate-fade-in-down">
                    Hi, I'm <span className="text-blue-400">Mihiresh Joshi</span>
                </h1>
                <p className="text-xl md:text-2xl font-medium animate-fade-in-up">
                    AI/ML Enthusiast | Full Stack Developer | Innovator
                </p>
                <div className="gap-4 flex flex-wrap mx-auto justify-center">
                    <a
                        href="/docs/mainresume_brown.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-gray-200 px-6 py-3 rounded-lg font-bold hover:bg-gray-700 transition"
                    >
                        View Resume
                    </a>
                    <a
                        href="/projects"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-gray-200 px-6 py-3 rounded-lg font-bold hover:bg-gray-700 transition"
                    >
                        My Projects
                    </a>
                    <a
                        href="/contact"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-gray-200 px-6 py-3 rounded-lg font-bold hover:bg-gray-700 transition"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-12 space-x-6 flex items-center justify-center">
                <a
                    href="https://github.com/mihireshjoshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-blue-400 hover:text-gray-400 transition"
                >
                    <i className="fab fa-github"></i> GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/mihiresh-joshi-651423207/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-blue-400 hover:text-gray-400 transition"
                >
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a
                    href="mailto:mihiresh.joshi@example.com"
                    className="text-2xl text-blue-400 hover:text-gray-400 transition"
                >
                    <i className="fas fa-envelope"></i> Email
                </a>
            </div>
        </div>
    );
};

export default HomePage;