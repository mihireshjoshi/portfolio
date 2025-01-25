"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TeamMember {
    name: string;
    linkedInUrl: string;
    imageUrl: string; // URL to LinkedIn profile picture
    role: string
}

interface Project {
    title: string;
    createdAt: string;
    abstract: string;
    description: string;
    features: string[];
    technologies: string[];
    video: string; // YouTube embed link
    link: string;
    organization: string; // Organization where the project was developed
    achievements: string[]; // List of achievements
    team: TeamMember[]; // List of team members
}

const projects: Project[] = [
    {
        "title": "FinVerse",
        "createdAt": "Dec 2024",
        "abstract": "Revolutionizing fintech networking for professionals, startups, and investors.",
        "description":
            "FinVerse is an advanced fintech networking platform designed to address the unique challenges faced by professionals, startups, and investors in the finance industry. By integrating state-of-the-art tools and leveraging modern technology, FinVerse fosters seamless collaboration, enhances communication, and simplifies complex networking processes. Whether you're a seasoned professional, an emerging startup founder, or an ambitious investor, FinVerse equips you with the tools to discover opportunities, manage investments, and engage with like-minded individuals. The platform focuses on personalized interactions, enabling users to stay updated with industry trends, access critical resources, and make informed decisions. Through its intuitive interface, secure systems, and AI-driven capabilities, FinVerse establishes a vibrant ecosystem where innovation thrives and meaningful connections are formed.",
        "features": [
            "Personalized Feeds for industry updates, highlighting trends, startups, and achievements.",
            "Comprehensive Funding Hub to support startups, manage bids, and monitor equity.",
            "AI-driven recommendations for connecting with startups or professionals based on preferences.",
            "Real-time messaging powered by Supabase, enabling secure and instant communication.",
            "Commenting, liking, and sharing posts for improved community engagement.",
            "Event discovery and participation, including schedules and registrations.",
            "Integrated notifications to stay informed about messages, updates, and activities."
        ],
        "technologies": ["React Native", "Supabase", "GitHub"],
        "video": "https://www.youtube.com/embed/ycRHQb2nTzk?si=udJE2dPwZFJdEScz",
        "link": "https://github.com/mihireshjoshi/FinVerse",
        "organization": "VJTI Hack Aurora",
        "achievements": [],
        team: [
            {
                name: "Mihiresh Joshi",
                linkedInUrl: "https://www.linkedin.com/in/mihiresh-joshi-651423207/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQEhNxKSs66NDQ/profile-displayphoto-shrink_400_400/B4DZQOHTTQG0Ag-/0/1735403583117?e=1742428800&v=beta&t=mN6hNW2_0T_pd_TPxWVjWKAlhDF3pQ3qEbsjGh4GhyM", // Replace with LinkedIn API or actual URL
                role: "App Developer"
            },
            {
                name: "Parth Athalye",
                linkedInUrl: "https://www.linkedin.com/in/parth1703/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHiSol7b4O5Lg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718816418545?e=1742428800&v=beta&t=08n-74a-CstZ-rJ2N7GC72QkxwDkFsP--NOX-Ml_DwI", // Replace with LinkedIn API or actual URL
                role: "Team Lead"
            },
            {
                name: "Arya Sawant",
                linkedInUrl: "https://www.linkedin.com/in/arya-sawant-2b8688213/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQFOWrCm4n9j_g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709209119770?e=1742428800&v=beta&t=jalMhERl8y2eBdo5YOzzHZRWqnN4HjGCY6DTgdLXkiI",
                role: "App Developer"
            },
            {
                name: "Soham Kulkarni",
                linkedInUrl: "https://www.linkedin.com/in/sohamk63/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFj3DsN_LojWQ/profile-displayphoto-shrink_400_400/B4DZQNcgP3GkAo-/0/1735392365507?e=1742428800&v=beta&t=elMcgcuMCEwMggk5BLEZXo_VuWGGC1xHkshwjgjdzxo", // Replace with LinkedIn API or actual URL
                role: "Team Lead"
            },
        ],
    },
    {
        "title": "AQI Nexus",
        "createdAt": "Aug 2024",
        "abstract": "Revolutionizing air quality monitoring with real-time insights and AI-driven forecasting.",
        "description":
            "AQI Nexus is a comprehensive air quality management platform designed to provide real-time monitoring, AI-powered forecasting, and personalized recommendations. Developed in collaboration with DY Patil University, AQI Nexus empowers users to make informed decisions about their environment, health, and safety. By combining advanced technology with an intuitive design, the platform caters to diverse user groups, including individuals, city planners, and governments. Its multilingual accessibility, historical data visualization, and proactive tools ensure users stay ahead of environmental challenges, fostering a healthier and more informed community.",
        "features": [
            "Real-Time AQI Monitoring: Provides live updates on air quality index, pollutants, temperature, and humidity for smarter decision-making.",
            "AI-Powered Forecasting: Machine learning models predict AQI levels up to 8 hours in advance to help users plan proactively.",
            "Historical Trends: Offers monthly heatmaps and detailed reports to identify patterns and support long-term planning.",
            "Personalized Recommendations: Delivers tailored advice for sensitive groups like children and the elderly to optimize safety.",
            "Multilingual Chatbot: Supports 11 Indian languages to ensure widespread accessibility and ease of use.",
            "User-Centric Design: Scalable platform adaptable for governments, individuals, and communities."
        ],
        "technologies": ["React Native", "FastAPI", "GitHub", "Machine Learning Libraries", "Python", "IoT"],
        "video": "https://www.youtube.com/embed/1gqTdXSS59M?si=jI8BvVQYq-uM4vE0",
        "link": "https://github.com/arif9353/Davies_WeatherHack",
        "organization": "KIIT Odisha, WATCH 2024",
        "achievements": ["Finalist of International Hackathon"],
        team: [
            {
                name: "Mihiresh Joshi",
                linkedInUrl: "https://www.linkedin.com/in/mihiresh-joshi-651423207/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQEhNxKSs66NDQ/profile-displayphoto-shrink_400_400/B4DZQOHTTQG0Ag-/0/1735403583117?e=1742428800&v=beta&t=mN6hNW2_0T_pd_TPxWVjWKAlhDF3pQ3qEbsjGh4GhyM", // Replace with LinkedIn API or actual URL
                role: "Team Lead | Fullstack Developer | ML Engineer",
            },
            {
                name: "Mohammed Arif",
                linkedInUrl: "https://www.linkedin.com/in/arif9353/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHllkGAB4meTA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712335920558?e=1742428800&v=beta&t=NjdWnERO2TiIzWxckWlIeIOht5_DD0VPTTIzX8kXXIE", // Replace with LinkedIn API or actual URL
                role: "API Developer | Gen AI Developer"
            },
            {
                name: "Zaid Parkar",
                linkedInUrl: "https://www.linkedin.com/in/zaidparkar/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHr3PYb4LOG5Q/profile-displayphoto-shrink_400_400/B4DZRJGSxGHYAo-/0/1736393174906?e=1742428800&v=beta&t=zINSHY7ug-7MwmrI4IBKsgCcvfwPfzPetbxIblObP7g", // Replace with LinkedIn API or actual URL
                role: "Cloud Engineer | API Developer"
            },

        ],
    },
    {
        "title": "SafeGuard",
        "createdAt": "Aug 2024",
        "abstract": "Enhancing workplace safety through real-time monitoring, compliance analysis, and advanced safety tools.",
        "description":
            "SafeGuard is a comprehensive workplace safety application designed to address the critical challenges of industrial environments. By leveraging advanced object detection and intelligent features, the platform ensures compliance with safety protocols, streamlines equipment reporting, and enhances worker security. SafeGuard integrates seamlessly with existing systems, providing a real-time overview of safety measures, detailed performance metrics, and emergency response tools. Built for both administrators and workers, SafeGuard revolutionizes workplace safety, creating a more secure and efficient industrial ecosystem.",
        "features": [
            "Real-time PPE Detection: Uses YOLO Object Detection to monitor CCTV feeds and ensure workers wear safety gear, such as helmets, vests, and eyewear.",
            "Safety Performance Analysis: Generates monthly safety reports and compliance metrics, encouraging accountability by linking performance to rewards or bonuses.",
            "Instant Admin Alerts: Sends real-time notifications to the Admin Panel for PPE violations and urgent SMS alerts for immediate action.",
            "Quick Equipment Damage Reporting: Enables workers to report faulty equipment with image uploads for swift approvals and repairs.",
            "Emergency Quick Exit Map: Provides a dynamically generated safe evacuation route for workers during emergencies.",
            "Streamlined System Integration: Easily integrates with existing safety and management systems to enhance monitoring and reporting."
        ],
        "technologies": [
            "React Native",
            "FastAPI",
            "YOLO Object Detection",
            "Convolutional Neural Networks (CNN)",
            "Twilio API for SMS Alerts",
            "Supabase",
            "Roboflow"
        ],
        "video": "https://www.youtube.com/embed/zxlPzBW-mRA?si=d0MC5nEHYnJIlWd9",
        "link": "https://github.com/mihireshjoshi/Kongsberg_PPE/tree/main",
        "organization": "Kongsberg Maritime",
        "achievements": ["Winner of KMI Techathon"],
        team: [
            {
                name: "Mihiresh Joshi",
                linkedInUrl: "https://www.linkedin.com/in/mihiresh-joshi-651423207/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQEhNxKSs66NDQ/profile-displayphoto-shrink_400_400/B4DZQOHTTQG0Ag-/0/1735403583117?e=1742428800&v=beta&t=mN6hNW2_0T_pd_TPxWVjWKAlhDF3pQ3qEbsjGh4GhyM", // Replace with LinkedIn API or actual URL
                role: "Team Lead | Frontend Developer"
            },
            {
                name: "Mohammed Arif",
                linkedInUrl: "https://www.linkedin.com/in/arif9353/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHllkGAB4meTA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712335920558?e=1742428800&v=beta&t=NjdWnERO2TiIzWxckWlIeIOht5_DD0VPTTIzX8kXXIE", // Replace with LinkedIn API or actual URL
                role: "Backend Developer | AI Developer"
            },
            {
                name: "Umam Khan",
                linkedInUrl: "https://www.linkedin.com/in/umamkhan/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFaT3eK8kJSGg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731666979695?e=1742428800&v=beta&t=96SSMOuCWXFzfKwSXPF7fPL5SDavnAdMm9Y5I6ZOWwQ", // Replace with LinkedIn API or actual URL
                role: "Frontend Developer"
            },
            {
                name: "Soham Kulkarni",
                linkedInUrl: "https://www.linkedin.com/in/sohamk63/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFj3DsN_LojWQ/profile-displayphoto-shrink_400_400/B4DZQNcgP3GkAo-/0/1735392365507?e=1742428800&v=beta&t=elMcgcuMCEwMggk5BLEZXo_VuWGGC1xHkshwjgjdzxo", // Replace with LinkedIn API or actual URL
                role: "Frontend Developer"
            },
        ],
    },
    {
        "title": "Cartsy",
        "createdAt": "Aug 2024",
        "abstract": "Revolutionizing retail shopping with smart navigation, efficient checkout, and personalized experiences.",
        "description":
            "Cartsy is a next-generation retail shopping app designed to address the common frustrations faced by customers in large retail stores. From navigating multiple aisles to dealing with long queues, Cartsy leverages cutting-edge technology to streamline the shopping experience. With real-time navigation, barcode scanning, and personalized recommendations, Cartsy enhances efficiency and ensures a hassle-free shopping journey. It is eco-friendly, hardware-free, and seamlessly integrates with existing store systems, making it a perfect solution for both customers and retailers. Cartsy is customer-centric, offering budget management, dynamic queue allocation, and real-time analytics to revolutionize in-store shopping.",
        "features": [
            "Seamless Navigation: Uses A* Pathfinding Algorithm to guide customers through the shortest path to their desired products.",
            "Barcode Scanning Integration: Allows customers to scan items to add them to a digital cart, check prices, and track inventory in real-time.",
            "Real-Time Location Tracking: QR Code Positioning keeps track of the shopper's location and provides optimized routes dynamically.",
            "AI-Driven Product Recommendations: Suggests personalized products based on shopping habits and notifies customers of ongoing sales.",
            "Dynamic Queue Allocation: Directs customers to the checkout counter with the shortest wait time using real-time data.",
            "Online Payment with Virtual Rewards: Enables payment via Stripe and rewards customers with virtual points for future visits.",
            "Budget Management: Displays shopping subtotals to help customers stay within budget and avoid last-minute returns.",
            "Traffic & Behavioral Analytics: Provides retailers insights into customer movement and shopping patterns for optimized store layouts and promotions.",
            "Eco-Friendly Digital Receipts: Reduces paper waste and offers a simple way for customers to track their purchases."
        ],
        "technologies": [
            "React Native",
            "Supabase",
            "Stripe API",
            "A* Pathfinding Algorithm",
            "QR Code Positioning",
            "GitHub",
            "AI Recommendation Systems"
        ],
        "video": "https://www.youtube.com/embed/o0yfA6gg6-g?si=x-USDe3pKA_c00Sq",
        "link": "https://github.com/mihireshjoshi/walmart",
        "organization": "Walmart",
        "achievements": [],
        team: [
            {
                name: "Mihiresh Joshi",
                linkedInUrl: "https://www.linkedin.com/in/mihiresh-joshi-651423207/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQEhNxKSs66NDQ/profile-displayphoto-shrink_400_400/B4DZQOHTTQG0Ag-/0/1735403583117?e=1742428800&v=beta&t=mN6hNW2_0T_pd_TPxWVjWKAlhDF3pQ3qEbsjGh4GhyM", // Replace with LinkedIn API or actual URL
                role: "App Developer | Frontend Developer"
            },
            {
                name: "Mohammed Arif",
                linkedInUrl: "https://www.linkedin.com/in/arif9353/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHllkGAB4meTA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712335920558?e=1742428800&v=beta&t=NjdWnERO2TiIzWxckWlIeIOht5_DD0VPTTIzX8kXXIE", // Replace with LinkedIn API or actual URL
                role: "Backend Developer"
            },
            {
                name: "Umam Khan",
                linkedInUrl: "https://www.linkedin.com/in/umamkhan/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFaT3eK8kJSGg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731666979695?e=1742428800&v=beta&t=96SSMOuCWXFzfKwSXPF7fPL5SDavnAdMm9Y5I6ZOWwQ", // Replace with LinkedIn API or actual URL
                role: "Team Lead"
            },
            {
                name: "Neil Rosario",
                linkedInUrl: "https://www.linkedin.com/in/neil-rosario-4455a6247/",
                imageUrl: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", // Replace with LinkedIn API or actual URL
                role: "Frontend Developer"
            },
        ],
    },
    {
        "title": "FutureFund",
        "createdAt": "May 2024",
        "abstract": "Simplifying retirement planning with advanced machine learning and personalized investment roadmaps.",
        "description": "FutureFund is a cutting-edge platform designed to help individuals secure their financial future by providing personalized investment recommendations. The platform utilizes advanced machine learning models to analyze user-provided financial data and generate tailored investment strategies. With its hierarchical prediction model architecture, FutureFund offers comprehensive insights into optimal asset types and specific investment opportunities. Developed in collaboration with DY Patil University, FutureFund simplifies the complexities of retirement planning, making it accessible and effective for users of all financial backgrounds.",
        "features": [
            "Personalized Investment Recommendations: Tailored advice based on your financial data.",
            "Comprehensive Data Collection: Considers factors such as age, years to retirement, savings, salary, and risk level.",
            "Multi-stage Prediction Models: Hierarchical models ensure detailed and accurate asset recommendations.",
            "User-friendly Interface: Designed for ease of use and understanding."
        ],
        "technologies": [
            "Next.js",
            "FastAPI",
            "Machine Learning",
            "Python",
            "GitHub",
            "Tensorflow",
            "ANN",
            "Data Visualization Tools"
        ],
        "video": "https://www.youtube.com/embed/7ACkQ23MtKw?si=2099SGHfVLVj-RRk",
        "link": "https://github.com/mihireshjoshi/FutureFund",
        "organization": "TIAA Retire-Thon",
        "achievements": ["Finalists of National Level Hackathon"],
        "team": [
            {
                name: "Mihiresh Joshi",
                linkedInUrl: "https://www.linkedin.com/in/mihiresh-joshi-651423207/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQEhNxKSs66NDQ/profile-displayphoto-shrink_400_400/B4DZQOHTTQG0Ag-/0/1735403583117?e=1742428800&v=beta&t=mN6hNW2_0T_pd_TPxWVjWKAlhDF3pQ3qEbsjGh4GhyM", // Replace with LinkedIn API or actual URL
                role: "ML Engineer"
            },
            {
                name: "Mohammed Arif",
                linkedInUrl: "https://www.linkedin.com/in/arif9353/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHllkGAB4meTA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712335920558?e=1742428800&v=beta&t=NjdWnERO2TiIzWxckWlIeIOht5_DD0VPTTIzX8kXXIE", // Replace with LinkedIn API or actual URL
                role: "API Developer"
            },
            {
                name: "Zaid Parkar",
                linkedInUrl: "https://www.linkedin.com/in/zaidparkar/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHr3PYb4LOG5Q/profile-displayphoto-shrink_400_400/B4DZRJGSxGHYAo-/0/1736393174906?e=1742428800&v=beta&t=zINSHY7ug-7MwmrI4IBKsgCcvfwPfzPetbxIblObP7g", // Replace with LinkedIn API or actual URL
                role: "Backend Developer"
            },
            {
                name: "Himanshu Kothari",
                linkedInUrl: "https://www.linkedin.com/in/iamhk12/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFCOmxd93Vtng/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718209302641?e=1742428800&v=beta&t=wWwEzixnDqR112ogDaFnzEX3ZDMzdBlv5oYRzyFWXqA", // Replace with LinkedIn API or actual URL
                role: "Frontend Developer"
            },
        ]
    },
    {
        "title": "Hisaab-Book",
        "createdAt": "Mar 2024",
        "abstract": "Revolutionizing inventory management for small businesses with multi-lingual support and AI-driven features.",
        "description": "Hisaab-Book is a transformative inventory management solution designed specifically for small businesses. By leveraging AI, voice recognition, and image processing, the platform simplifies inventory tracking and management, making it accessible even to non-tech-savvy users. Hisaab-Book supports 12 Indic languages, ensuring inclusivity and breaking language barriers. Its features, such as voice command integration, photo-based inventory management, and robust alert systems, enable small businesses to streamline their operations effortlessly. The app also provides a comprehensive dashboard for real-time inventory insights and an AI-powered chatbot for instant assistance, creating a seamless and efficient experience for users.",
        "features": [
            "Multi-Lingual Support: Supports 12 Indic languages (English, Marathi, Hindi, Bengali, Gujarati, Assamese, Oriya, Punjabi, Kannada, Telugu, Tamil, Malayalam) to ensure accessibility.",
            "Snap and Manage: Add, update, and delete products by taking a photo, capturing details like count, brand, and price.",
            "Voice Command Integration: Manage inventory using voice commands in 12 Indic languages.",
            "Alert System: Sends SMS notifications when product quantities fall below a user-defined threshold to prevent stockouts.",
            "Insightful Dashboard: Real-time visualizations of inventory data with charts and graphs displaying stock levels, low-stock items, and critical metrics.",
            "AI-Powered Chatbot Assistance: Provides instant answers to inventory queries, delivering quick insights and resolving user questions."
        ],
        "technologies": [
            "React Native",
            "FastAPI",
            "Machine Learning",
            "Generative AI",
            "Image Recognition APIs",
            "Twilio API for SMS",
            "Database Management Systems (DBMS)",
            "GitHub"
        ],
        "video": "https://www.youtube.com/embed/KFyGk81-Yes?si=DA3wFNBczHcTOdjo",
        "link": "https://github.com/mihireshjoshi/Hisab-Book",
        "organization": "Bhashini Hackathon",
        "achievements": ["Finalist in National Level Government Hackathon"],
        "team": [
            {
                name: "Mihiresh Joshi",
                linkedInUrl: "https://www.linkedin.com/in/mihiresh-joshi-651423207/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQEhNxKSs66NDQ/profile-displayphoto-shrink_400_400/B4DZQOHTTQG0Ag-/0/1735403583117?e=1742428800&v=beta&t=mN6hNW2_0T_pd_TPxWVjWKAlhDF3pQ3qEbsjGh4GhyM", // Replace with LinkedIn API or actual URL
                role: "Team Lead | Full Stack Developer",
            },
            {
                name: "Mohammed Arif",
                linkedInUrl: "https://www.linkedin.com/in/arif9353/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHllkGAB4meTA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712335920558?e=1742428800&v=beta&t=NjdWnERO2TiIzWxckWlIeIOht5_DD0VPTTIzX8kXXIE", // Replace with LinkedIn API or actual URL
                role: "Backend Developer"
            },
            {
                name: "Parth Athalye",
                linkedInUrl: "https://www.linkedin.com/in/parth1703/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHiSol7b4O5Lg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718816418545?e=1742428800&v=beta&t=08n-74a-CstZ-rJ2N7GC72QkxwDkFsP--NOX-Ml_DwI", // Replace with LinkedIn API or actual URL
                role: "Gen AI Developer"
            },
            {
                name: "Arya Sawant",
                linkedInUrl: "https://www.linkedin.com/in/arya-sawant-2b8688213/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQFOWrCm4n9j_g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709209119770?e=1742428800&v=beta&t=jalMhERl8y2eBdo5YOzzHZRWqnN4HjGCY6DTgdLXkiI",
                role: "App Developer"
            },
            {
                name: "Umam Khan",
                linkedInUrl: "https://www.linkedin.com/in/umamkhan/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFaT3eK8kJSGg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731666979695?e=1742428800&v=beta&t=96SSMOuCWXFzfKwSXPF7fPL5SDavnAdMm9Y5I6ZOWwQ", // Replace with LinkedIn API or actual URL
                role: "Frontend Developer"
            },
        ]
    }




];

const ProjectsPage = () => {
    const [activeTab, setActiveTab] = useState<{ [key: number]: string }>(
        Object.fromEntries(projects.map((_, index) => [index, "description"]))
    );

    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollProgress(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [feedbacks, setFeedbacks] = useState<{
        [project: string]: { name?: string; review: string }[];
    }>(
        Object.fromEntries(projects.map((project) => [project.title, []]))
    );

    const [feedbackInput, setFeedbackInput] = useState<{ name: string; review: string }>({
        name: "",
        review: "",
    });

    const handleTabChange = (projectIndex: number, tab: string) => {
        setActiveTab((prev) => ({ ...prev, [projectIndex]: tab }));
    };

    const handleFeedbackSubmit = (projectTitle: string) => {
        if (feedbackInput.review.trim()) {
            setFeedbacks((prev) => ({
                ...prev,
                [projectTitle]: [...prev[projectTitle], feedbackInput],
            }));
            setFeedbackInput({ name: "", review: "" }); // Reset input fields
        }
    };

    return (
        <div className="bg-gray-900 text-gray-200 min-h-screen py-10">
            <div
                className="fixed z-20 top-0 left-0 h-1 bg-blue-500"
                style={{width: `${scrollProgress}%`}}
            />
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg"
                            whileHover={{scale: 1.05}}
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.2}}
                        >
                            {/* Project Header */}
                            <div className="mb-6">
                                <p className="text-gray-400 mb-2 italic">{project.organization}</p>
                                <div className="flex items-start gap-[32px]">
                                    <div className={"flex flex-col gap-1"}>
                                        <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                                        <p className="text-sm text-gray-400 italic">{project.createdAt}</p>
                                    </div>
                                    {project.achievements?.length > 0 && (
                                        <div className={"flex flex-row gap-2"}>
                                            {project.achievements.map((achievement, i) => (
                                                <p
                                                    key={i}
                                                    className="bg-yellow-100 bg-opacity-20 text-yellow-500 text-sm font-semibold rounded-2xl mt-1 px-4 py-2"
                                                >
                                                    {achievement}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <p className="text-gray-300 mt-4">{project.abstract}</p>
                            </div>

                            {/* Video and Tabs */}
                            <div className="flex flex-col lg:flex-row gap-10">
                                <div className="lg:w-1/2">
                                    <iframe
                                        src={project.video}
                                        className="w-full h-64 md:h-80 rounded-lg shadow-lg"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                    {/* Call to Action */}
                                    <div className="mt-6">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:underline inline-block"
                                        >
                                            View Project
                                        </a>
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <div className="flex overflow-x-scroll space-x-4 border-b border-gray-700 pb-2 mb-4">
                                        {["description", "features", "technologies", "team", "feedback"].map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => handleTabChange(index, tab)}
                                                className={`text-sm font-bold px-4 py-2 rounded-t-lg ${
                                                    activeTab[index] === tab
                                                        ? "text-blue-400 border-b-2 border-blue-400"
                                                        : "text-gray-400"
                                                }`}
                                            >
                                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                            </button>
                                        ))}
                                    </div>
                                    <div>
                                        {activeTab[index] === "description" && (
                                            <p className="text-gray-300">{project.description}</p>
                                        )}
                                        {activeTab[index] === "features" && (
                                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                                {project.features.map((feature, i) => (
                                                    <li key={i}>{feature}</li>
                                                ))}
                                            </ul>
                                        )}
                                        {activeTab[index] === "technologies" && (
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="bg-gray-700 text-gray-200 py-1 px-2 rounded text-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        {activeTab[index] === "feedback" && (
                                            <div>
                                                {/* Feedback Form */}
                                                <div className="flex flex-col space-y-4">
                                                    <input
                                                        type="text"
                                                        placeholder="Your Name (Optional)"
                                                        value={feedbackInput.name}
                                                        onChange={(e) =>
                                                            setFeedbackInput({
                                                                ...feedbackInput,
                                                                name: e.target.value,
                                                            })
                                                        }
                                                        className="bg-gray-700 text-gray-200 p-2 rounded focus:outline-none"
                                                    />
                                                    <textarea
                                                        placeholder="Write your review here..."
                                                        value={feedbackInput.review}
                                                        onChange={(e) =>
                                                            setFeedbackInput({
                                                                ...feedbackInput,
                                                                review: e.target.value,
                                                            })
                                                        }
                                                        className="bg-gray-700 text-gray-200 p-2 rounded focus:outline-none h-32"
                                                    />
                                                    <button
                                                        onClick={() => handleFeedbackSubmit(project.title)}
                                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
                                                    >
                                                        Submit Feedback
                                                    </button>
                                                </div>
                                                {/* Feedback List */}
                                                <div className="mt-6 space-y-4">
                                                    {feedbacks[project.title]?.map((fb, fbIndex) => (
                                                        <div key={fbIndex} className="bg-gray-700 p-4 rounded">
                                                            <p className="text-sm text-blue-400">
                                                                {fb.name || "Anonymous"}
                                                            </p>
                                                            <p className="text-gray-200 mt-2">{fb.review}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {activeTab[index] === "team" && (
                                            <div className="space-y-2">
                                                {project.team.map((member, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-center bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                                    >
                                                        {/* Profile Picture */}
                                                        <img
                                                            src={member.imageUrl}
                                                            alt={member.name}
                                                            className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                                                        />
                                                        {/* Member Details */}
                                                        <div className="ml-4 flex flex-col">
                                                            <a
                                                                href={member.linkedInUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-lg font-semibold text-blue-400 hover:underline"
                                                            >
                                                                {member.name}
                                                            </a>
                                                            <p className="text-gray-300 text-sm">
                                                                {member.role || "Team Member"}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>


                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ProjectsPage;