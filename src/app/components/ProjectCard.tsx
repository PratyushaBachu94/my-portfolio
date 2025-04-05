type Project = {
    title: string;
    clientName?: string;
    employerName: string;
    dateRange: string;
    location: string;
    technologiesUsed: string[];
    description: string;
    link: string;
    clientLogo?: string;
  };
  
  export default function ProjectCard({
    title,
    clientName,
    employerName,
    dateRange,
    location,
    technologiesUsed,
    description,
    link,
    clientLogo,
  }: Project) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col md:flex-row gap-6">
        {/* Left Side: Client Logo */}
        <div className="flex-shrink-0">
          {clientLogo ? (
            <img
              src={clientLogo}
              alt={`${clientName || 'Client'} logo`}
              className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-md"
            />
          ) : (
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
              No Logo
            </div>
          )}
        </div>
  
        {/* Right Side: Project Details */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          {clientName && (
            <p className="text-gray-700 mb-1">
              <span className="font-bold">Client:</span> {clientName}
            </p>
          )}
          <p className="text-gray-700 mb-1">
            <span className="font-bold">Employer:</span> {employerName}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-bold">Date Range:</span> {dateRange}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-bold">Location:</span> {location}
          </p>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
          {technologiesUsed.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset"
            >
              {tech}
            </span>
          ))}
        </div>
        </div>
      </div>
    );
  }