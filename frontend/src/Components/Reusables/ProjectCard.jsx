import React from 'react';

const ProjectCard = ({ title, image, techStack, projectLink, delay }) => {
  return (
    <div 
      className="relative group hover:-translate-y-6 transition-all duration-200 rounded-lg overflow-hidden"
      style={{
        animation: `fadeInUp 1s ease-out forwards, bobbing 3s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        opacity: 0,
      }}
    >

      <div className="w-full h-auto relative">
        <img
          src={image}
          className="object-cover w-[300px] h-[350px] md:w-[250px] h-[250px] transition-all duration-300"
        />
        
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-yellow-400 to-black opacity-0 group-hover:opacity-80 transition-all duration-300"></div>

        <div className="absolute bottom-0 left-0 w-full px-4 py-16 bg-black opacity-60 group-hover:opacity-0 transition-all duration-300"></div>

        <div className="absolute bottom-0 left-0 w-full px-4 py-4 transition-all duration-300">
          <p className="text-2xl text-white group-hover:translate-y-[-4rem] transition-all duration-300">
            {title}
          </p>
          <p className="text-md text-white group-hover:translate-y-[-3rem] transition-all duration-300">
            {techStack}
          </p>

          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 bg-yellow-500 text-black py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
