
const ProjectCard = ({imageUrl, title, description, demoLink, codeLink}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <img className="w-full h-56 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
        <div className="mt-4">
          <a href={demoLink} className="text-base font-medium text-indigo-500 hover:text-indigo-600">
            Live Demo
          </a>
          <a href={codeLink} className="ml-4 text-base font-medium text-indigo-500 hover:text-indigo-600">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
