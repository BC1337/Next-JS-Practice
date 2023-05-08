import Image from 'next/image';

const About = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
          <p className="mt-4 text-lg text-gray-500">I am a passionate web developer with experience in both frontend and backend development. Here's a little bit about my current knowledge:</p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div>
            <dt className="text-2xl leading-6 font-medium text-gray-900 text-center flex justify-center mx-auto">Frontend</dt>

              <dd className="mt-5 text-base text-gray-500 text-center">
                <ul className="pl-0 list-none">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Vue 3</li>
                  <li>Nuxt 3</li>
                </ul>
              </dd>
            </div>

            <div>
              <dt className="text-2xl leading-6 font-medium text-gray-900 text-center">Backend</dt>
              <dd className="mt-5 text-base text-gray-500 text-center">
                <ul className="pl-0 list-none">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Mongoose</li>
                  <li>MongoDB</li>
                  <li>Nitro</li>
                  <li>Firebase</li>
                </ul>
              </dd>
            </div>

            <div>
              <dt className="text-2xl leading-6 font-medium text-gray-900  text-center ">Tools</dt>
              <dd className="mt-5 text-base text-gray-500 text-center">
                <ul className="pl-0 list-none">
                  <li>Git</li>
                  <li>Github</li>
                  <li>Postman</li>
                  <li>Photoshop</li>
                  <li>Vercel</li>
                  <li>Vs Code</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
