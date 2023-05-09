import ProjectCard from './projectcard'

const Projects = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl mb-10 font-extrabold text-gray-900 sm:text-4xl">Projects</h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          <ProjectCard
            imageUrl="/project1.jpg"
            title="Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            demoLink="#"
            codeLink="#"
          />
          <ProjectCard
            imageUrl="/project1.jpg"
            title="Project 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            demoLink="#"
            codeLink="#"
          />
          <ProjectCard
            imageUrl="/project1.jpg"
            title="Project 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            demoLink="#"
            codeLink="#"
          />
          <ProjectCard
            imageUrl="/project1.jpg"
            title="Project 4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            demoLink="#"
            codeLink="#"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
