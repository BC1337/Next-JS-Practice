const About = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">About Me</h2>
          <p className="text-lg text-gray-600 mb-8">Here's my current stack:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Frontend</h3>
            <ul className="text-lg text-gray-600">
              <li className="mb-2">HTML</li>
              <li className="mb-2">CSS</li>
              <li className="mb-2">TypeScript</li>
              <li className="mb-2">React</li>
              <li className="mb-2">Next.js</li>
              <li className="mb-2">Vue 3</li>
              <li className="mb-2">Nuxt 3</li>
            </ul>
          </div>
          <div className="bg-white shadow rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Backend</h3>
            <ul className="text-lg text-gray-600">
              <li className="mb-2">Node.js</li>
              <li className="mb-2">Express</li>
              <li className="mb-2">Mongoose</li>
              <li className="mb-2">MongoDB</li>
              <li className="mb-2">Nitro</li>
              <li className="mb-2">Firebase</li>
            </ul>
          </div>
          <div className="bg-white shadow rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Tools</h3>
            <ul className="text-lg text-gray-600">
              <li className="mb-2">Git</li>
              <li className="mb-2">Github</li>
              <li className="mb-2">Postman</li>
              <li className="mb-2">Photoshop</li>
              <li className="mb-2">Vercel</li>
              <li className="mb-2">VS Code</li>
              <li className="mb-2">Linux & Windows OS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
