import React from 'react'

const hero = () => {
  return (
    <section className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Hi, I'm Jane Doe
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl md:mt-5 md:text-2xl">
            I'm a full-stack web developer with over 5 years of experience. I specialize in building high-performance web applications using modern web technologies.
            </p>
            <div className="mt-10 sm:flex justify-center">
            <div className="rounded-md shadow">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                View Projects
                </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-200 bg-gray-700 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                Contact Me
                </a>
            </div>
            </div>
        </div>
      </div>
  </section>
  )
}

export default hero