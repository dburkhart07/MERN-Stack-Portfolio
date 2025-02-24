import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const ExperienceCard = ({ company, dates, description, delay, isOpen, toggleExpand }) => {
  return (
    <div
      className={`w-full max-w-[400px] md:max-w-[500px] bg-[rgb(119,47,17)] rounded-lg relative cursor-pointer mx-auto transition-all duration-[2000ms] ease-in-out flex flex-col`}
      onClick={toggleExpand}
      style={{
        animation: `fadeInUp 1s ease-out forwards, bobbing 3s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        opacity: 0,
      }}
    >
      <div
        className={`overflow-hidden transition-max-height transition-all duration-[2000ms] ease-in-out ${
          isOpen ? 'max-h-[1000px]' : 'max-h-[175px]'
        }`}
      >
        {!isOpen ? (
          <>
            <div className="absolute top-[5px] left-[50%] transform -translate-x-1/2 text-xl">
              <FaArrowUp />
            </div>
            <p className="pt-[2rem] pl-[1.5rem] text-yellow-300 text-[20px] font-semibold">
              {company}
            </p>
            <div className="flex flex-col mt-[2.5rem] pl-[1.5rem] mb-[1rem]">
              <p className="text-white text-[16px]">Click for more</p>
              <p className="text-yellow-300 text-[16px] mt-2">{dates}</p>
            </div>
          </>
        ) : (
          <>
            <div className="absolute top-[5px] left-[50%] transform -translate-x-1/2 text-xl">
              <FaArrowDown />
            </div>
            <p className="pt-[2rem] pl-[1.5rem] text-yellow-300 text-[20px] font-semibold">
              {company}
            </p>
            <div className="pt-[2rem] pl-[1.5rem] pr-[2rem] text-white text-[16px] leading-relaxed flex-grow whitespace-pre-wrap break-words">
              {description.map((line, index) => (
                <p key={index} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
