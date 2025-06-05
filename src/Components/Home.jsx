import React from 'react';

function Home() {
  return (
    <div
      className={`bg-[#0F1729] md:top-1/2 relative pt-20 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 gap-10`}
    >
      <div className="mb-6 md:mb-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"
          alt="Sourabh"
          className="rounded-full h-52 w-52 md:h-60 md:w-60 object-cover"
        />
      </div>

      <div className="text-center md:text-left text-white">
        <h1 className="text-2xl md:text-3xl font-medium mb-2">Hi, I am</h1>
        <h2 className="text-3xl md:text-4xl font-medium mb-2">Sourabh Bhardwaj</h2>
        <h3 className="text-blue-600 text-2xl md:text-4xl font-medium mb-4">
          Software Development Engineer
        </h3>

        <p className="leading-relaxed text-sm md:text-base">
          Full-stack developer with 1+ years of experience in building <br />
          scalable web applications. Passionate about creating efficient, <br />
          maintainable code and delivering exceptional user experiences. <br />
          Expertise in React, Node JS MongoDB.
        </p>

        <a href="#Contact">
          <button className="bg-[#3778E1] m-5 h-10 px-4 cursor-pointer rounded-2xl">
            Contact Me
          </button>
        </a>
        <a href="https://www.linkedin.com/in/saurabh-bhardwaj-892033231/">
          <button className="border h-10 px-4 cursor-pointer m-5 border-gray-700 rounded-2xl text-white">
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
