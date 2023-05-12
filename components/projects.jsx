import ProjectCard from './projectcard'

const Projects = () => {
  return (
    <section className="bg-gray-100" id="projects">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl mb-10 font-extrabold text-gray-900 sm:text-4xl">Projects</h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          <ProjectCard
            imageUrl="#"
            title="Fullstack Vue & Express"
            description="Showcasing user authentication and CRUD actions"
            demoLink="#"
            codeLink="#"
          />
          <ProjectCard
            imageUrl="#"
            title="Nuxt Portfolio"
            description="Nuxt 3 Frontend & Nitro Backend connected to node mailer"
            demoLink="#"
            codeLink="#"
          />
          <ProjectCard
            imageUrl="#"
            title="Next 13 Portfolio"
            description="Learning the ropes of next 13 while showing off my projects."
            demoLink="#"
            codeLink="#"
          />
          <ProjectCard
            imageUrl="#"
            title="Next 13 Chat App"
            description="This project makes use of : Prisma, MongoDB, Express, React, Node.js"
            demoLink="#"
            codeLink="#"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
