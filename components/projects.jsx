import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Projects</h2>
        </div>
        <div className="mt-10 flex flex-wrap -mx-4">
          {/* Project card 1 */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/project1.jpg"
                  alt="Project 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Project 1</h3>
                <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full">
                    Demo
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full">
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project card 2 */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/project2.jpg"
                  alt="Project 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Project 2</h3>
                <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full">
                    Demo
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full">
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>


            {/* card 3 */}
          <div className="w-full lg:w-1/2 px-4 mt-7">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/project2.jpg"
                  alt="Project 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Project 3</h3>
                <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full">
                    Demo
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full">
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>

            {/* card 4 */}
          <div className="w-full lg:w-1/2 px-4 mt-7">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/project2.jpg"
                  alt="Project 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Project 4</h3>
                <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full">
                    Demo
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full">
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>   
      </div>
    </section>
  )
}

export default Projects
