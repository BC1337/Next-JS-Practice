import Image from "next/image";

const ProjectCard = (props) => {
  const { imageUrl, title, description, demoLink, codeLink } = props;
  
  return (
    <div className="w-full px-4 mb-8 lg:mb-0">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-48">
          <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-2 text-gray-500">{description}</p>
          <div className="mt-4 flex space-x-4">
            <a href={demoLink} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full">
              Demo
            </a>
            <a href={codeLink} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full">
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
