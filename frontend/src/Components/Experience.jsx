import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExperienceCard from './Reusables/ExperienceCard';
import ExpImg from '../Img/experience_bg.svg';

const Experience = () => {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
  const [experience, setExperience] = useState([])
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    // Fetch experience data from the backend
    axios.get(`${API_BASE_URL}/api/experience`)
      .then((response) => {
        const fetchedExperience = response.data.map((exp) => ({
          company: exp.company,
          dates: exp.dates,
          description: exp.description,
          delay: exp.delay,
        }));
        setExperience(fetchedExperience);
      })
      .catch((error) => console.error('Error fetching experience data:', error));
  }, []);

  const toggleCard = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-[rgb(85,17,0)] text-[rgb(255,233,209)] pt-[3rem] pl-[6rem] md:pt-[4rem] pb-[10rem]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
        Work Experience
      </h1>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between">

        <div className="w-full lg:w-1/2 px-4">
          <div className="h-[30rem] overflow-y-auto space-y-4 scrollbar-none">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="transition-opacity duration-500 opacity-0 lg:opacity-100"
              style={{ animation: `fadeInUp ${exp.delay}s ease-out forwards` }}
            >
              <ExperienceCard
                company={exp.company}
                dates={exp.dates}
                description={exp.description}
                delay={exp.delay}
                isOpen={openIndex === index}
                toggleExpand={() => toggleCard(index)}
              />
            </div>
          ))}
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0 px-4"
             style={{
               animation: `fadeInUp 2.5s ease-out forwards`,
               opacity: 0,
             }}>
          <img
            src={ExpImg}
            alt="Experience background"
            className="w-full h-auto object-cover opacity-50 lg:opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
