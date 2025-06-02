import React from 'react';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 80 },
  { name: 'JavaScript', level: 50 },
  { name: 'React', level: 60 },
  { name: 'Tailwind CSS', level: 60 },
  { name: 'Node.js', level: 10 },
];

const ProgressBar = () => {
  return (
    <>
      <section className='h-full bg-[#0F1729] flex justify-center'>
        <h1 className='text-white text-5xl font-bold mt-10'>Skills</h1>
      </section>

      <div className='bg-[#0F1729] flex flex-wrap justify-center gap-10 p-10'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='w-full max-w-xs p-4 flex flex-col items-start'
          >
            <h2 className='text-xl text-white font-semibold mb-2'>
              {skill.name}
            </h2>
            
            <h1 className='text-gray-600 '>{skill.level}%</h1>
            <div className='w-full bg-[#1E293B] rounded-full h-1 overflow-hidden'>
                
              <div
                className='bg-blue-600 h-full text-white text-xs font-medium text-right pr-2 transition-all duration-300 ease-in-out'
               
              >
                {skill.level}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProgressBar;
