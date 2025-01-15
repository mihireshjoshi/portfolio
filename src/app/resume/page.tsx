"use client";

import React from "react";

const ResumePage = () => {
    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "/docs/mainresume_brown.pdf"; // Replace with the actual path to your PDF
        link.download = "Mihiresh_Joshi_Resume.pdf";
        link.click();
    };

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">My Resume</h1>
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                        <li>
                            <strong>B.Tech in Computer Engineering (Data Science)</strong> - Dr. D.Y. Patil, RAIT
                            (2021 - 2025, CGPA: 9.46/10)
                        </li>
                        <li>
                            <strong>HSC</strong> - St. Xavier’s, Mumbai (84.83%, 2021 Passout)
                        </li>
                        <li>
                            <strong>SSC</strong> - IES Chandrakant Patkar Vidyalaya (March 2019)
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        <span className="bg-gray-200 py-1 px-2 rounded text-gray-800">Python</span>
                        <span className="bg-gray-200 py-1 px-2 rounded text-gray-800">FastAPI</span>
                        <span className="bg-gray-200 py-1 px-2 rounded text-gray-800">Next.js</span>
                        <span className="bg-gray-200 py-1 px-2 rounded text-gray-800">React</span>
                        <span className="bg-gray-200 py-1 px-2 rounded text-gray-800">TensorFlow</span>
                        <span className="bg-gray-200 py-1 px-2 rounded text-gray-800">AWS</span>
                        <span className="bg-gray-200 py-1 px-2 rounded text-gray-800">Supabase</span>
                        <span className="bg-gray-200 py-1 px-2 rounded text-gray-800">Figma</span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience</h2>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                        <li>
                            <strong>AI Engineer and Back-End Developer</strong> - Code For Good, JPMorgan Chase
                            & Co (June 2024): Collaborated in a hackathon and developed solutions for a non-profit.
                        </li>
                        <li>
                            <strong>ML Engineer and Front-End Developer</strong> - Computer Society of India, RAIT
                            (June 2023): Implemented a Student Placement Predictor using real data.
                        </li>
                        <li>
                            <strong>Full Stack Developer</strong> - Caldeira Estate, Green Mango (Sept-Oct 2024):
                            Developed a portfolio website for the estate, allowing actions like booking a stay.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Achievements</h2>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                        <li>Winner - Techathon Kode Konquerors (Sept 2024)</li>
                        <li>Finalist - TIAA Retire-Thon (June 2024)</li>
                        <li>Finalist - Bhashini Sprint (May 2024)</li>
                    </ul>

                    <button
                        onClick={downloadResume}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    >
                        Download Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResumePage;
