interface TimelineItemProps {
    year: string;
    title: string;
    description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center mb-4">
            <div className="text-gray-500 md:w-1/4">{year}</div>
            <div className="bg-white shadow-lg rounded-lg p-4 md:w-3/4">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-700 mt-2">{description}</p>
            </div>
        </div>
    );
};

const Timeline = ({ items }: { items: TimelineItemProps[] }) => {
    return (
        <div>
            {items.map((item, index) => (
                <TimelineItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
};

export default Timeline;
