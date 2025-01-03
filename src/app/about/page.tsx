"use client";

import React from "react";

const AboutPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Me</h1>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <p className="text-lg text-gray-700 mb-6">
                        Hi, I’m <strong>Mihiresh Joshi</strong>, a passionate Computer Engineering student specializing in AI/ML, Web Development, and Full-Stack projects. I enjoy building impactful solutions to real-world problems using modern tools and frameworks like FastAPI, Next.js, and TensorFlow.
                    </p>

                    <p className="text-lg text-gray-700 mb-6">
                        My journey as an engineer has been defined by a strong desire to learn, collaborate, and innovate. From hackathons to internships, I have honed my skills across various domains like data science, mobile application development, and cloud solutions.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <li className="bg-gray-50 p-4 rounded shadow text-gray-700 font-medium">Python</li>
                        <li className="bg-gray-50 p-4 rounded shadow text-gray-700 font-medium">React</li>
                        <li className="bg-gray-50 p-4 rounded shadow text-gray-700 font-medium">Next.js</li>
                        <li className="bg-gray-50 p-4 rounded shadow text-gray-700 font-medium">TensorFlow</li>
                        <li className="bg-gray-50 p-4 rounded shadow text-gray-700 font-medium">FastAPI</li>
                        <li className="bg-gray-50 p-4 rounded shadow text-gray-700 font-medium">Supabase</li>
                        <li className="bg-gray-50 p-4 rounded shadow text-gray-700 font-medium">AWS</li>
                        <li className="bg-gray-50 p-4 rounded shadow text-gray-700 font-medium">Figma</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Hobbies</h2>
                    <p className="text-lg text-gray-700">
                        Beyond coding, I enjoy participating in hackathons, brainstorming new ideas, and exploring cutting-edge technologies. When I’m not programming, you’ll find me sketching designs or experimenting with UX/UI concepts to enhance user experiences.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
