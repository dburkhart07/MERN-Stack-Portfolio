import React, { useState } from 'react';
import Card from './Reusables/Card';
import { NavLink } from 'react-router-dom';
import { IconCloudDemo } from './Reusables/IconCloudDemo'; 
import SkillsLanguage from './Reusables/SkillsLanguage';
import ProfessionalPicture from '../Img/Professional Picture.jpg';
import { memo } from 'react';


const MemoizedIconCloudDemo = memo(IconCloudDemo);

function Homepage() {
  const [selectedCategory, setSelectedCategory] = useState('languages');

  return (
    <section className="flex flex-col items-center bg-[rgb(85,17,0)] text-[rgb(255,233,209)] pt-12 p-4">
      <div className="grid grid-cols-1 gap-[50px] px-4 md:px-20">

        <Card className="w-full md: w-[80%] mx-auto px-4" title="Hi, I'm Dalton!">
          <div className="flex flex-col md:flex-row items-start">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500 mb-10 ml-4">
                Software Developer
              </h2>
              <NavLink to="/contact" className="flex items-center ml-5 mt-20">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-md flex justify-center items-center transition duration-300 px-4 py-2">
                  Contact Me
                </div>
              </NavLink>
            </div>
            <div className="flex-1 flex justify-center md:ml-10 md:-mt-10 mt-5">
              <img
                src={ProfessionalPicture}
                alt="Professional"
                className="rounded-full w-[300px] h-[300px] object-cover shadow-lg"
              />
            </div>
          </div>
        </Card>

        <Card className="w-full md:w-[80%] mx-auto px-4" title="Who am I" delay={0.5}>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-1/2 pr-4">
              <p className="text-[24px] ml-5 mr-5 mb-5 md:mr-20">
                I'm a Computer Science and AI, and Math student at Northeastern University, passionate about leveraging technology in 
                healthcare and education. My goal is to use my skills to make a positive impact in our society and my community, as well
                as pass my knowledge onto others.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center relative">
              <NavLink to="/about">
                <h1 className="text-[72px] font-bold animate-gradient-text text-center">
                  Learn more about me!
                </h1>
              </NavLink>
            </div>
          </div>
        </Card>


        <Card className="w-full md:w-[80%] mx-auto px-4 max-w-4xl mx-auto p-6" title="My Skills/Favorite Technologies" delay={1}>
          <div className="flex flex-col md:flex-row">
              <div className="flex-1 pb-[2rem] md:pb-0 w-full md:w-1/2 order-1">
                  <div className="flex flex-col space-y-4">
                      <div>
                          <button
                              onClick={() => setSelectedCategory('languages')}
                              className={`px-4 py-2 mx-2 ${selectedCategory === 'languages' ? 'bg-orange-400' : 'bg-transparent'} text-white rounded-md`}
                          >
                              Languages
                          </button>
                          <button
                              onClick={() => setSelectedCategory('frameworks')}
                              className={`px-4 py-2 mx-2 ${selectedCategory === 'frameworks' ? 'bg-orange-400' : 'bg-transparent'} text-white rounded-md`}
                          >
                              Frameworks
                          </button>
                          <button
                              onClick={() => setSelectedCategory('devtools')}
                              className={`px-4 py-2 mx-2 ${selectedCategory === 'devtools' ? 'bg-orange-400' : 'bg-transparent'} text-white rounded-md`}
                          >
                              Developer Tools
                          </button>
                      </div>

                      <div className="pb-[2rem]">
                          {selectedCategory === 'languages' && (
                              <SkillsLanguage
                                  skills={[
                                      { name: 'Java: 5 years', level: '100%', color: 'bg-[#ff5733]' },
                                      { name: 'Python: 4 years', level: '80%', color: 'bg-[#f9a825]' },
                                      { name: 'HTML/CSS/JS: 2 years', level: '40%', color: 'bg-[#8e44ad]' },
                                      { name: 'C: 1.5 years', level: '30%', color: 'bg-[#3b3f42]' },
                                      { name: 'TypeScript: 1 year', level: '20%', color: 'bg-[#00bcd4]' }
                                  ]}
                              />
                          )}
                          {selectedCategory === 'frameworks' && (
                              <SkillsLanguage
                                  skills={[
                                      { name: 'React: 2 years', level: '100%', color: 'bg-[#ff5733]' },
                                      { name: 'Tensorflow: 2 years', level: '100%', color: 'bg-[#f9a825]' },
                                      { name: 'Tailwind: 1 year', level: '50%', color: 'bg-[#8e44ad]' },
                                      { name: 'Express: 1 year', level: '50%', color: 'bg-[#3b3f42]' },
                                      { name: 'Springboot: 1 year', level: '50%', color: 'bg-[#00bcd4]' }
                                  ]}
                              />
                          )}
                          {selectedCategory === 'devtools' && (
                              <SkillsLanguage
                                  skills={[
                                      { name: 'Git: 3 years', level: '100%', color: 'bg-[#ff5733]' },
                                      { name: 'GitHub: 3 years', level: '100%', color: 'bg-[#f9a825]' },
                                      { name: 'VSCode: 3 years', level: '100%', color: 'bg-[#8e44ad]' },
                                      { name: 'IntelliJ: 2 years', level: '66.7%', color: 'bg-[#3b3f42]' },
                                      { name: 'Postman: 2 years', level: '66.7%', color: 'bg-[#00bcd4]' }
                                  ]}
                              />
                          )}
                      </div>

                      <div className="flex space-x-4 mt-8">
                          <NavLink to="/projects" className="bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-md px-6 py-2 transition duration-300 hover:bg-orange-500">
                              See my Projects
                          </NavLink>
                          <NavLink to="/experience" className="bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-md px-6 py-2 transition duration-300 hover:bg-orange-500">
                              View my Experience
                          </NavLink>
                      </div>
                  </div>
              </div>

              <div className="flex-1 flex items-center justify-center mt-10 md:mt-0 w-full md:w-full order-2 md:order-2">
                <div className="relative mx-auto w-full md:block">
                    <MemoizedIconCloudDemo />
                </div>
              </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Homepage;
