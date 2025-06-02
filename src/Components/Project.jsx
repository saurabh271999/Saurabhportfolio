import React from 'react';
import Weather from '../assets/Weather.png'
import Cashify from '../assets/Cashify.png'
import Cleartrip from '../assets/Cleartrip.png'
const projectData = [
  {
    name: 'Weather Application',
    GithubLink: 'https://github.com/your-repo/weather-app',
    LiveLink: 'https://weather-app-live.com',
    description: 'A simple weather application using React and OpenWeather API.',
    image: Weather
  },
  {
    name: 'Cleartrip Clone',
    GithubLink: 'https://github.com/your-repo/netflix-clone',
    LiveLink: 'https://mytripapp.netlify.app/',
    description: 'Clone of Netflix with TMDB API and user authentication.',
    image: Cleartrip
  },
  {
    name: 'Shopify App',
    GithubLink: 'https://github.com/your-repo/chat-app',
    LiveLink: 'https://chat-app-live.com',
    description: 'A real-time chat application built with Socket.io and React.',
    image: Cashify
  },
  {
    name: 'Shopify App',
    GithubLink: 'https://github.com/your-repo/chat-app',
    LiveLink: 'https://chat-app-live.com',
    description: 'A real-time chat application built with Socket.io and React.',
    image: Cashify
  },
  {
    name: 'Shopify App',
    GithubLink: 'https://github.com/your-repo/chat-app',
    LiveLink: 'https://chat-app-live.com',
    description: 'A real-time chat application built with Socket.io and React.',
    image: Cashify
  },
  {
    name: 'Shopify App',
    GithubLink: 'https://github.com/your-repo/chat-app',
    LiveLink: 'https://chat-app-live.com',
    description: 'A real-time chat application built with Socket.io and React.',
    image: Cashify
  },
];

const Project = () => {
  return (
    <div className="min-h-scre flex flex-col items-center px-4">
      <h1 className="text-white text-5xl font-bold mt-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl mb-10">
        {projectData.map((data, index) => (
          <div
            key={index}
            className="border border-gray-500 rounded-xl p-4 text-white bg-[#1E293B]"
          >
            <h2 className="text-xl font-semibold mb-2">{data.name}</h2>
            <img className='w-full h-50 border-none' src={data.image} alt="" />
            <p className="mb-4">{data.description}</p>
            <div className="flex gap-4">
              <a
                href={data.GithubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href={data.LiveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
