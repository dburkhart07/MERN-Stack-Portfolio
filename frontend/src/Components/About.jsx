import React from 'react';
import { useEffect, useState } from 'react';
import Song from './Reusables/Song';
import axios from 'axios';

const About = () => {
  const [songs, setSongs] = useState([]);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/songs`)
      .then((response) => {
        const fetchedSongs = response.data.map((song) => ({
          embedUrl: song.embedUrl,
          delay: song.delay, 
        }));
        setSongs(fetchedSongs);
        console.log(fetchedSongs);
      })
      .catch((error) => console.error('Error fetching song data:', error));
  }, []);
  

  return (
    <div className="min-h-screen bg-[rgb(85,17,0)] text-[rgb(255,233,209)] p-8 flex justify-center">
      <div className="w-full max-w-3xl space-y-8">
        <h1
          className="text-4xl font-bold text-center mb-6 fade-in"
          style={{ animationDelay: '0s' }}
        >
          About Me
        </h1>
        {/* Bio */}
        <section className="fade-in" style={{ animationDelay: '0s' }}>
          <p>
            Hi, I'm Dalton! I'm currently a second-year student studying Computer Science and AI at Northeastern University.
            My technical interests lie within the intersection between AI and software, specifically in healthcare, economics, and psychology.
            I also enjoy doing a lot of volunteer work in general, but especially with education in tech, and love working on 
            projects that aim to educate younger or underserved communities on how to become software developers.
          </p>
        </section>

        {/* Favorites section */}
        <section className="fade-in" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-3xl font-semibold mb-4">Favorites</h2>
          <p>
            I personally believe that the best way to get to know a person is to find out what makes them happy. 
            Some of my favorite things outside of tech are listed below! 😊
          </p>
        </section>

        {/* Hobbies Section */}
        <section className="fade-in" style={{ animationDelay: '1s' }}>
          <h4 className="text-2xl font-semibold mb-4">Hobbies</h4>
          <ul className="list-disc list-inside ml-3">
            <li>Playing music (guitar, piano, and saxophone)</li>
            <li>Personal fitness</li>
            <li>Watching educational content</li>
            <li>Cooking and baking (I love making seasonal dishes for my family and friends)</li>
            <li>Playing video and board games</li>
          </ul>
        </section>

        {/* Songs and artists */}
        <section> 
          <div className="fade-in" style={{ animationDelay: '1.5s' }}>
            <h4 className="text-2xl font-semibold mb-4">Songs and Artists</h4>
            <p>The current songs I like changes very often, but these are some of my favorites currently</p>
          </div>
          {songs.map((song, index) => (
            <Song
              embedUrl={song.embedUrl}
              delay={song.delay}
            />
          ))}
          <br />
          <div className="fade-in" style = {{ animationDelay: '3s' }}>
            <p>Some of my favorite artists of all time</p>
            <ul className="list-disc list-inside ml-3">
              <li>Shawn Mendes</li>
              <li>Hozier</li>
              <li>Noah Kahan</li>
              <li>SZA</li>
              <li>Bruno Mars</li>
              <li>Wallows</li>
            </ul>
          </div>
        </section>

        {/* Favorite Movies Section */}
        <section className="fade-in" style={{ animationDelay: '3.5s' }}>
          <h4 className="text-2xl font-semibold mb-4">Movies and Genres</h4>
          <p>Movies:</p>
          <ul className="list-disc list-inside ml-3"> 
            <li>Spiderman: Into the Spiderverse (Spiderman is my favorite superhero)</li>
            <li>Aladdin (my favorite Disney movie of all time)</li>
            <li>Crazy Rich Asians</li>
            <li>LaLa Land</li>
            <li>Howl's Moving Castle</li>
          </ul>
          <br />
          <p>Genres:</p>
          <ul className="list-disc list-inside ml-3"> 
            <li>Comedy (specifically Rom Coms)</li>
            <li>Horror/Thriller</li>
            <li>Drama</li>
          </ul>
        </section>

        {/* Travel Section */}
        <section className="fade-in" style={{ animationDelay: '4s' }}>
          <h4 className="text-2xl font-semibold mb-4">Places I Want to Travel To</h4>
          <p>I have not gotten to travel a lot, but there are many places I would love to go see:</p>
          <ul className="list-disc list-inside ml-3">
            <li>Japan (Tokyo, Kyoto, and Okinawa)</li>
            <li>Italy (Rome, Venice, and Milan)</li>
            <li>Iceland</li>
            <li>Hawaii</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
