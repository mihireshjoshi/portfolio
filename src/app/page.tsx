"use client";

import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
    return (
        <div className="bg-black text-white min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-800 to-black opacity-70 blur-xl"></div>
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#00ffff,_transparent)] opacity-30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                ></motion.div>

                <motion.h1
                    className="text-6xl md:text-7xl font-bold text-center z-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Welcome to <span className="text-blue-500">My Universe</span>
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl mt-4 text-center max-w-2xl z-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    I’m Mihiresh Joshi, crafting impactful solutions in AI/ML, Full-Stack Development, and cutting-edge technologies.
                </motion.p>
                <motion.a
                    href="#about"
                    className="mt-6 px-8 py-3 rounded-full bg-blue-600 text-white font-medium shadow-lg hover:scale-110 transition transform z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    Explore More
                </motion.a>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="relative py-20 bg-gradient-to-r from-gray-900 to-black text-center"
            >
                <motion.div
                    className="absolute -top-16 -right-20 w-96 h-96 bg-gradient-to-tr from-blue-800 via-purple-700 to-pink-600 rounded-full blur-3xl opacity-40"
                ></motion.div>

                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <motion.p
                    className="text-lg max-w-3xl mx-auto mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Passionate about building scalable, innovative solutions. Expertise in Python, React, FastAPI, and more, with a drive for real-world problem-solving and creative coding.
                </motion.p>
                <motion.a
                    href="/about"
                    className="px-8 py-3 rounded-full bg-purple-600 text-white font-medium shadow-lg hover:scale-110 transition transform"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Know Me Better
                </motion.a>
            </section>

            {/* Projects Section */}
            <section
                id="projects"
                className="relative py-20 bg-gradient-to-l from-black via-gray-900 to-indigo-900"
            >
                <motion.div
                    className="absolute -top-20 -left-16 w-80 h-80 bg-gradient-to-br from-pink-600 to-red-600 rounded-full blur-2xl opacity-50"
                ></motion.div>

                <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
                <p className="text-lg text-center max-w-3xl mx-auto mb-10">
                    Explore a collection of innovative solutions showcasing my expertise in full-stack development, AI, and futuristic tech.
                </p>
                <motion.a
                    href="/projects"
                    className="block mx-auto w-max px-8 py-3 rounded-full bg-teal-600 text-white font-medium shadow-lg hover:scale-110 transition transform"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    See My Work
                </motion.a>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="relative py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-center"
            >
                <motion.div
                    className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-700 to-indigo-600 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2"
                ></motion.div>

                <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
                <p className="text-lg max-w-3xl mx-auto mb-8">
                    Let’s connect! Whether for collaboration, discussions, or opportunities, I’m always open to new ventures.
                </p>
                <motion.a
                    href="/contact"
                    className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium shadow-lg hover:scale-110 transition transform"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    Get in Touch
                </motion.a>
            </section>
        </div>
    );
};

export default HomePage;
