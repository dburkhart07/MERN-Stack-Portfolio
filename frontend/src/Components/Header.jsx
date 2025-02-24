import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faUser, faEnvelope, faDesktop, faBriefcase, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[rgb(102,34,0)] text-[rgb(255,233,209)] py-4">
      <nav className="container mx-auto flex justify-between px-4 md:px-8">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="md:hidden items-center">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
          </button>
        </div>

        <div className={`md:flex ${isOpen ? 'flex' : 'hidden'} transition-all duration-300 ease-in-out`}>
          <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 md:items-center">
            <li>
              <NavLink to="/" className="hover:text-[rgb(255,94,77)]">
                <FontAwesomeIcon icon={faHouse} className="mr-2" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-[rgb(255,94,77)]">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="hover:text-[rgb(255,94,77)]">
                <FontAwesomeIcon icon={faDesktop} className="mr-2" />
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" className="hover:text-[rgb(255,94,77)]">
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-[rgb(255,94,77)]">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Contact
              </NavLink>
            </li>
            <li>
              <a href="https://github.com/dburkhart07" target="_blank" className="transition-colors duration-200 hover:text-[rgb(255,94,77)]">
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/dalton-burkhart" target="_blank" className="transition-colors duration-200 hover:text-[rgb(255,94,77)]">
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
