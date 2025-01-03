import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Portfolio</h1>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">
                            <a className="hover:text-blue-400">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a className="hover:text-blue-400">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <a className="hover:text-blue-400">Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume">
                            <a className="hover:text-blue-400">Resume</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a className="hover:text-blue-400">Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
