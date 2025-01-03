const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
                <p>
                    <a
                        href="https://www.linkedin.com/in/mihiresh-joshi-651423207/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        LinkedIn
                    </a>{" "}
                    |{" "}
                    <a
                        href="https://github.com/mihireshjoshi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        GitHub
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
