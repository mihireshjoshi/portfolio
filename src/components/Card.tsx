interface CardProps {
    title: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-700 mt-2">{description}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-4 inline-block"
            >
                Learn More
            </a>
        </div>
    );
};

export default Card;
